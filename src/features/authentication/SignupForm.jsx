import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate()
  const { register, getValues, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { mutate, isLoading } = useSignup();

  function onSubmit({ name, email, password }) {
    mutate({ name, email, password }, { onSettled: () => reset() });
    navigate("/overview")
    
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f4f0]">
      <div className="mx-4 w-full max-w-md rounded-xl bg-white px-6 py-8 shadow-lg">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              full name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "This field is required" })}
              className="mt-1 block w-full rounded-md border border-gray-600 bg-transparent px-4 py-3 shadow-sm outline-none sm:text-sm"
            />
            {errors.name && (
              <p className="pt-0.5 text-xs font-medium tracking-wide text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              className="mt-1 block w-full rounded-md border border-gray-600 bg-transparent px-4 py-3 shadow-sm outline-none sm:text-sm"
            />
            {errors.email && (
              <p className="pt-0.5 text-xs font-medium tracking-wide text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password (min 8 character)
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
              className="mt-1 block w-full rounded-md border border-gray-600 bg-transparent px-4 py-3 shadow-sm outline-none sm:text-sm"
            />
            {errors.password && (
              <p className="pt-0.5 text-xs font-medium tracking-wide text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="pb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Repeat Password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
              className="mt-1 block w-full rounded-md border border-gray-600 bg-transparent px-4 py-3 shadow-sm outline-none sm:text-sm"
            />
            {errors.passwordConfirm && (
              <p className="pt-0.5 text-xs font-medium tracking-wide text-red-500">
                {errors.passwordConfirm.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-[#201f24] px-4 py-3.5 font-bold text-white hover:bg-[#98908B] focus:outline-none focus:ring-2 focus:ring-[#201f20] focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
