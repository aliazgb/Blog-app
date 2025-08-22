"use client";

import { useCategories } from "@/hooks/useCategories";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function CreatePostForm() {
  const schema = yup.object();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
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
    </form>
  );
}

export default CreatePostForm;
