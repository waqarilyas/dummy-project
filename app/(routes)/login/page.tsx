"use client";

import PrimaryButton from "@/app/components/_shared/PrimaryButton";
import PrimaryInput from "@/app/components/_shared/PrimaryInput";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/global/LogoMain.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center pt-8 flex-col">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/global/userProfile.png"
              alt="Next.js Logo"
              width={100}
              height={37}
              priority
            />

            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white my-2">
              Welcome
            </p>
            <p className="text-md leading-tight tracking-tight text-gray-600 ">
              Continue with PepLog Ai
            </p>
          </div>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
              <PrimaryInput
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required
                label="Email Address"
              />

              <PrimaryInput
                label="Password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
              />

              <PrimaryButton title="Sign In" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {`Don't`} have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Signup here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
