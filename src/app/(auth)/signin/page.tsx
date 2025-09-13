"use client";
import { useAuth } from "@/context/AutchContext";
import Button from "@/ui/Button";
import FormUi from "@/ui/FormUi";
import Loading from "@/ui/Loading";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { JSX } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Email is invalid.").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

function Signin(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { Signin } = useAuth();

  const onSubmit = async (values: FormValues): Promise<void> => {
    await Signin(values);
  };

  return (
    <FormUi>
      <h1 className="text-2xl font-bold text-secondary-900 text-center mb-8">
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <RHFTextField<FormValues>
          label="Email"
          name="email"
          register={register}
          errors={errors}
          dir="ltr"
          isRequired
        />
        <RHFTextField<FormValues>
          label="Password"
          name="password"
          register={register}
          errors={errors}
          type="password"
          dir="ltr"
          isRequired
        />
        {isLoading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          <Button type="submit" className="w-full">
            Login
          </Button>
        )}
      </form>

      <Link
        href="/signup"
        className="block text-center text-blue-400 mt-6 hover:underline"
      >
        Signup
      </Link>
    </FormUi>
  );
}

export default Signin;
