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
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import useCreatePost from "../create/_/useCreatePost";

function CreatePostForm() {
  const [imageUrl, setImageUrl] = useState(null);
  const { createPost, isCreating } = useCreatePost();
  const router = useRouter();
  const schema = yup
    .object({
      title: yup
        .string()
        .min(5, "Enter at least 5 characters")
        .required("Title is required"),
      briefText: yup
        .string()
        .min(10, "Enter at least 10 characters")
        .required("Short description is required"),
      text: yup
        .string()
        .min(10, "Enter at least 10 characters")
        .required("Description is required"),
      slug: yup.string().required("Slug is required"),
      readingTime: yup
        .number()
        .positive()
        .integer()
        .required("Reading time is required")
        .typeError("Please enter a valid number"),
      category: yup.string().required("Category is required"),
    })
    .required();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    register,
  } = useForm({ mode: "onTouched", resolver: yupResolver(schema) });
  const { transformedCategories: categories } = useCategories();

  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    console.log(formData);
    createPost(formData, {
      onSuccess: () => {
        router.push("/profile/posts");
      },
    });
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        label="title"
        name="title"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFSelect
        label="category"
        name="category"
        options={categories}
        register={register}
        isRequired
      />
      <RHFTextField
        label="briefText"
        name="briefText"
        register={register}
        errors={errors}
        isRequired
      />

      <RHFTextField
        label="slug"
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
        label="reading time"
        name="readingTime"
        register={register}
        errors={errors}
        isRequired
      />

      <Controller
        name="coverImage"
        rules={{ required: "*" }}
        control={control}
        render={({ field: { onChange, value, ...rest } }) => {
          return (
            <FileInput
              {...rest}
              label="coverImage"
              value={value?.fileName}
              onChange={(e) => {
                const file = e.target.files[0];
                setImageUrl(URL.createObjectURL(file));
                onChange(file);
                e.target.value = null;
              }}
            />
          );
        }}
      />

      {imageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            alt="cover-iamge"
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
        {isCreating ? (
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
