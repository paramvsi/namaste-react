import React from "react";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Perform login logic here with the form data
    console.log("Login data:", data);
  };
  return (
    <div className="w-[95%] h-screen lg:h-[500px] flex items-center justify-center m-auto">
      <form
        className="border-2 border-gray-700 p-8 rounded-lg flex items-center flex-col w-screen lg:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl text-center font-bold text-gray-800 p-7">
          Login to enjoy your treats..
        </h2>

        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: "Phone Number is required" }}
          render={({ field, fieldState }) => (
            <>
              <input
                className="w-[90%] px-5 py-2 text-lg border-2 border-gray-600"
                type="number"
                {...field}
                placeholder="Phone Number"
              />
              {fieldState.error && (
                <p className="text-red-600">{fieldState.error.message}</p>
              )}
            </>
          )}
        />

        <button
          className="w-[90%] p-2 text-lg bg-red-600  text-white my-4"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
