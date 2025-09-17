"use client";

import { useCategories } from "@/hooks/useCategories";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import SpinnerMini from "@/ui/SpinnerMini";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";
import imageCompression from "browser-image-compression";
import { Controller, useForm, SubmitHandler, Resolver } from "react-hook-form";
import * as yup from "yup";
import useCreatePost from "../create/_/useCreatePost";
import useEditPost from "../create/_/useEditPost";
import { uploadToCloudinary } from "@/services/uploadService";
import { FormValues } from "types/Post";
import { Post } from "types/ApiTypes";

interface CreatePostFormProps {
  postEdit?: Post;
}

function CreatePostForm({ postEdit }: CreatePostFormProps): JSX.Element {
  const router = useRouter();
  const { createPost, isCreating } = useCreatePost();
  const { editPost } = useEditPost();
  const { transformedCategories: categories } = useCategories();

  const isEditSession = Boolean(postEdit?._id);

  const initialValues: FormValues = {
    title: postEdit?.title || "",
    briefText: postEdit?.briefText || "",
    text: postEdit?.text || "",
    slug: postEdit?.slug || "",
    readingTime: postEdit?.readingTime || 0,
    category: postEdit?.category?._id || categories[0]?.label,
    coverImage: postEdit?.coverImage || postEdit?.coverImageUrl || null,
  };
  console.log(categories[0])
  const [imageUrl, setImageUrl] = useState<string | null>(
    typeof initialValues.coverImage === "string"
      ? initialValues.coverImage
      : null
  );
  const [isCompressing, setIsCompressing] = useState<boolean>(false);

  const schema = yup.object({
    title: yup.string().min(5).required(),
    briefText: yup.string().min(10).required(),
    text: yup.string().min(10).required(),
    slug: yup.string().required(),
    readingTime: yup.number().positive().integer().required(),
    category: yup.string().required(),
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onTouched",
    resolver: yupResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (data.coverImage instanceof File) {
      setIsCompressing(true);
      try {
        const compressedFile = await imageCompression(data.coverImage, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });
        const uploadedUrl = await uploadToCloudinary(compressedFile);
        data.coverImage = uploadedUrl;
        setImageUrl(uploadedUrl);
      } catch (err) {
        console.error("Error compressing/uploading image:", err);
        setIsCompressing(false);
        return;
      }
      setIsCompressing(false);
    }

    const formData = new FormData();
    (Object.keys(data) as (keyof FormValues)[]).forEach((key) => {
      const value = data[key];
      if (value !== null && value !== undefined) {
        formData.append(key, value instanceof File ? value : String(value));
      }
    });

    if (isEditSession && postEdit?._id) {
      editPost(
        { id: postEdit._id, data: formData },
        { onSuccess: () => router.push("/profile/posts") }
      );
    } else {
      createPost(formData, { onSuccess: () => router.push("/profile/posts") });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        label="Title"
        name="title"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFSelect
        label="Category"
        name="category"
        options={categories}
        register={register}
        isRequired
      />
      <RHFTextField
        label="Brief Text"
        name="briefText"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="Slug"
        name="slug"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="Text"
        name="text"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="Reading Time"
        name="readingTime"
        register={register}
        errors={errors}
        isRequired
      />

      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "*" }}
        render={({ field: { onChange, value, ...rest } }) => (
          <FileInput
            {...rest}
            label="Cover Image"
            // value={typeof value === "string" ? value : value?.name ?? ""}
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              if (file) setImageUrl(URL.createObjectURL(file));
              onChange(file);
              if (e.target.files) e.target.value = "";
            }}
          />
        )}
      />

      {imageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            alt="cover-image"
            src={imageUrl}
            className="object-cover object-center"
          />
          <ButtonIcon
            onClick={() => {
              setImageUrl(null);
              setValue("coverImage", null);
            }}
            variant="red"
            className="w-6 h-6 absolute left-4 top-4"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}

      <div>
        {isCreating || isCompressing ? (
          <SpinnerMini />
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            Confirm
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreatePostForm;
