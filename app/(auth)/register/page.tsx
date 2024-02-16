"use client";
import InputForm from "@/components/AuthComponent/InputForm";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useSignup } from "@/hooks/useSignup";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading, errMessage, succesSignUp } = useSignup();
  const { user } = useAuthContext();

  const register = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signup(username, email, password);
  };

  if (user) redirect("/");

  return (
    <div className="relative">
      <div className="max-w-[300px] md:max-w-sm rounded-lg py-4 mx-auto bg-white drop-shadow-md">
        <div className="bg-black text-white w-fit px-4 py-1 text-xs rounded-t-lg absolute -rotate-90 top-20 -left-12">
          Sociale
        </div>
        <section>
          <h2 className="text-xl font-bold text-center mb-2">Sign up</h2>
          <p className="text-center text-xs text-gray-500">
            Just create an account and enjoy <br /> the experience
          </p>
          <form
            onSubmit={register}
            className="gap-4 flex flex-col w-5/6 mx-auto mt-4 text-sm"
          >
            {succesSignUp && (
              <div className="bg-green-200 text-green-900 text-center text-sm py-2 my-2">
                Success Register
              </div>
            )}
            {error && (
              <div className="bg-red-200 text-red-900 text-center text-sm py-2 my-2">
                {errMessage}
              </div>
            )}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="john doo"
                className="border-2 px-3 py-2 rounded-md focus:outline-none focus:ring-1  focus:ring-indigo-600"
              />
            </div>
            <InputForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <Button disabled={isLoading}>Sign up</Button>
          </form>
          <div className="flex justify-center mt-8">
            <p className="text-sm text-gray-500">
              <Link href="/login" className="underline text-blue-500">
                Log in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
