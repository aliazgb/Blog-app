"use client";

import { useCategories } from "@/hooks/useCategories";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function CreatePostForm() {
  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);
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
            <Controller
        name="coverImage"
        control={control}
        render={({ field: { value, onChange, ...rest } }) => {
          return (
            <FileInput
              label="choise cover Image"
              name="coverImage"
              isRequired
              errors={errors}
              {...rest}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                // console.log(file);
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
            />
          );
        }}
      />
    </form>
  );
}

export default CreatePostForm;
