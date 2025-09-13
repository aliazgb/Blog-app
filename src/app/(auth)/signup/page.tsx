"use client";

import { useAuth } from "@/context/AutchContext";
import Button from "@/ui/Button";
import FormUi from "@/ui/FormUi";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// const schema = yup
//   .object({
//     name: yup.string().required("required"),
//   })
//   .required();

const schema = yup.object({
  name: yup
    .string()
    .min(5, "Name is invalid.")
    .max(30)
    .required("Name is required"),
  email: yup.string().email("Email is invalid.").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

function Signup(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  // const router = useRouter();
  const { Signup } = useAuth();

  const onSubmit = async (values: FormValues) => {
    await Signup(values);
  };

  return (
    <FormUi>
      <div>
        <h1 className="text-secondary-900 text-center mb-6 text-xl font-bold">
          Signup
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          <RHFTextField<FormValues>
            register={register}
            label="Full Name"
            name="name"
            errors={errors}
          />
          <RHFTextField<FormValues>
            register={register}
            label="Email"
            name="email"
          />
          <RHFTextField<FormValues>
            register={register}
            label="Password"
            name="password"
            type="password"
          />
          <div className="mt-6">
            <Button className="w-full" type="submit">
              Confirm
            </Button>
          </div>
        </form>
        <Link href="/signin " className="text-secondary-500 mt-6 text-center">
          Login
        </Link>
      </div>
    </FormUi>
  );
}

export default Signup;
