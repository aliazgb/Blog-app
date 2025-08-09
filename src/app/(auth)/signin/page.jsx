"use client";

import { useAuth } from "@/context/AutchContext";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required("required"),
  })
  .required();

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const router = useRouter();
  const { Signin } = useAuth();
  const onSubmit = async (values) => {
    await Signin(values);
  };

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          register={register}
          label="Email"
          name="email"
          errors={errors}
        />
        <RHFTextField
          register={register}
          label="Password"
          name="password"
          type="password"
        />
        <button className="w-full primary">Confirm</button>
      </form>
    </div>
  );
}

export default Signin;
