import { login, loginUrl } from '@/services/use-auth';
import type { NextPage } from 'next';
import Link from 'next/link';
import { FormEvent } from 'react';
import useSWRMutation from 'swr/mutation';

const Login: NextPage = () => {
  const { trigger } = useSWRMutation(loginUrl, login);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    trigger({ formData: data });
  };

  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      <div className="flex bg-white w-2/3 max-w-3xl max-h-96 drop-shadow-xl">
        <div className="w-2/4 p-6 border-r-4 border-r-gray-50">
          <h1 className="font-logo text-xl uppercase">
            <span className="text-yellow-400 font-black">_</span>Dashboard
          </h1>

          <div className="form-head m-auto max-w-xs">
            <h2 className="font-semibold text-center mt-16">Welcome back</h2>
            <span className="mt-2 text-xs text-center text-gray-500 block">
              Welcome back! Please enter your details.
            </span>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 m-auto max-w-xs">
            <div>
              <input
                className="h-10 w-full border-b-2 pl-2 text-sm"
                type="email"
                name="username"
                placeholder="Email"
              />
            </div>
            <div className="mt-2">
              <input
                className="h-10 w-full border-b-2 pl-2 text-sm"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full h-9 mt-4 bg-black text-white text-sm rounded">
              Log in
            </button>

            <p className="mt-4 text-gray-500 text-xs text-center">
              Dont have an account?{' '}
              <Link href={'/signup'} className="text-primary-main">
                Sign up for free
              </Link>
            </p>
          </form>
        </div>
        <div className="slides bg-blue-700 w-2/4 relative rounded-r">
          <div className="absolute left-0 top-0 w-full h-full bg-[url('/images/login-image.svg')] bg-no-repeat bg-[-25rem_-12rem] opacity-10"></div>
          <div className="absolute w-full h-full bg-[url('/images/login-image.svg')] bg-no-repeat bg-cover bg-[0rem_4rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
