import { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "./useLogin";
import MiniSpinner from "../../ui/MiniSpinner"

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    mutate(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <div className="grid grid-cols-1 gap-28 lg:flex lg:items-center">
      <img
        src="/illustration-authentication.svg"
        alt=""
        className="m-4 hidden rounded-xl lg:block"
      />
      <div className="rounded-b-lg bg-[#201f24] p-6 lg:hidden">
        <img src="/logo-large.svg" alt="" className="mx-auto" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[22rem] max-w-xl grow rounded-2xl bg-white px-8 py-4 md:w-full lg:mx-4"
      >
        <h1 className="py-5 text-4xl font-bold">Login</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-xs font-bold text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="grow rounded-md border border-gray-600 bg-transparent px-4 py-3 outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="text-xs font-bold text-gray-500"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="grow rounded-md border border-gray-600 bg-transparent px-4 py-3 outline-none"
            />
          </div>
          <button
            className="mt-2 rounded-md bg-[#201F24] p-4 text-sm font-bold text-gray-50 hover:bg-[#98908B]"
            disabled={isLoading}
          >
           {!isLoading ? "login" : <MiniSpinner />  }
          </button>

          <p className="my-3 text-center text-sm font-medium text-gray-400">
            Need to create an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-gray-800 underline underline-offset-4"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
