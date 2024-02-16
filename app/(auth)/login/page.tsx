"use client";
import InputForm from "@/components/AuthComponent/InputForm";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useLogin } from "@/hooks/useLogin";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await login(email, password);
  };

  if (user) return redirect("/");

  return (
    <div className="relative">
      <div className="max-w-[300px] md:max-w-sm rounded-lg py-6 mx-auto bg-white drop-shadow-md">
        <div className="bg-black text-white w-fit px-4 py-1 text-xs rounded-t-lg absolute -rotate-90 top-20 -left-12">
          Sociale
        </div>
        <section>
          <h2 className="text-xl font-bold text-center mb-2">
            Login To Your Account
          </h2>
          <p className="text-center text-xs text-gray-500">
            Get Started with our app, just <br /> login to your account and
            enjoy the <br />
            experience
          </p>
          <form
            onSubmit={handleLogin}
            className="gap-4 flex flex-col w-5/6 px-2 mx-auto mt-4"
          >
            {error && (
              <div className="bg-red-200 text-red-900 text-center text-sm py-2 my-2">
                Invalid email or password
              </div>
            )}
            <InputForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <Button disabled={isLoading}>Login</Button>
          </form>
          <div className="flex justify-center mt-8">
            <p className="text-xs text-gray-500">
              Don't have account ?{" "}
              <Link href="/register" className="underline text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
