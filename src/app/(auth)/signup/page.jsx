"use client";

import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={register}
          label="Full Name"
          name="name"
        />
        <TextField
          register={register}
          label="Email"
          name="email"
        />
         <TextField
          register={register}
          label="Password"
          name="password"
          type="password"
        />
      </form>
    </div>
  );
}

export default Signup;
