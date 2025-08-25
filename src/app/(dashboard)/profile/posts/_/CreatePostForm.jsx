"use client";

import { useCategories } from "@/hooks/useCategories";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import useCreatePost from "../create/_/useCreatePost";
import SpinnerMini from "@/ui/SpinnerMini";

function CreatePostForm() {
  const schema = yup.object();
  const [imageUrl, setImageUrl] = useState(null);
  const { createPost, isCreating } = useCreatePost();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    register,
  } = useForm({ mode: "onTouched", resolver: yupResolver(schema) });
  const { transformedCategories: categories } = useCategories();
  return (
    <form className="form">
      <RHFTextField
        label="title"
        name="title"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="Short text"
        name="ShortText"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="description"
        name="description"
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
        label="reading time"
        name="readingtime"
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
      <Controller
        name="cover-image"
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
        {isCreating || isEditing ? (
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
