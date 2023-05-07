import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import * as RiIcon from "react-icons/ri";

const Auth = () => {
  const { status } = useSession();
  const router = useRouter();

  const sinInPaper = () => {
    signIn("github");

    router.push("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-[90%] lg:w-[35%] md:w-[75%]  mx-auto container  rounded-md border border-indigo-300 shadow-md py-4 px-2">
        <h4 className="text-center text-2xl font-semibold text-[#252525]">
          Welcome To Paper
        </h4>
        <form className="my-4">
          <div className="my-3">
            <input
              type={"email"}
              placeholder="Example@gmail.com"
              className=" outline-none w-full border border-indigo-300 rounded-md px-2 h-[45px]"
            />
          </div>
          <div className="my-3">
            <input
              type={"password"}
              placeholder="Example@gmail.com"
              className="outline-none w-full border border-indigo-300 rounded-md px-2 h-[45px]"
            />
          </div>
          <button className="my-3 w-full bg-blue-700 text-white h-[45px] text-xl font-semibold rounded-md">
            Submit
          </button>
        </form>
        <div className="mt-5 flex items-center justify-center gap-x-4">
          <button
            onClick={sinInPaper}
            className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-indigo-600 rounded-full transition-all duration-200 hover:scale-110 scale-100"
          >
            <RiIcon.RiGithubLine size={25} />
          </button>
          <button
            disabled
            onClick={() => signIn("google")}
            className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-indigo-600 rounded-full transition-all duration-200 hover:scale-110 scale-100"
          >
            <RiIcon.RiGoogleLine size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
