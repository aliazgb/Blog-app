"use client";

import { useAuth } from "@/context/AutchContext";
import Button from "@/ui/Button";
import FormUi from "@/ui/FormUi";
import RHFTextField from "@/ui/RHFTextField";
import SpinnerMini from "@/ui/SpinnerMini";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("required"),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const router = useRouter();
  const { Signup, isLoading } = useAuth();

  const onSubmit = async (values) => {
    await Signup(values);
  };

  return (
    <FormUi>
      <div>
        <h1 className="text-secondary-900 text-center mb-6 text-xl font-bold">
          Signup
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          <RHFTextField
            register={register}
            label="Full Name"
            name="name"
            errors={errors}
          />
          <RHFTextField register={register} label="Email" name="email" />
          <RHFTextField
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
