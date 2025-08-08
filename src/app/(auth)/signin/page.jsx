"use client";

import { signinApi } from "@/services/authService";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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

  const onSubmit = async (values) => {
    try {
      const { user, message } = await signinApi(values);
      toast.success(message);
      console.log("first");
      //   router.push("/profile")
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField register={register} label="Email" name="email" errors={errors}/>
        <RHFTextField
          register={register}
          label="Password"
          name="password"
          type="password"
        />
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default Signin;
