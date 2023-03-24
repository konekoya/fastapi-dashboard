import { login, loginUrl } from '@/services/use-auth';
import axios from 'axios';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useSWRMutation from 'swr/mutation';

type data = {
  username: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<data>();

  const { trigger } = useSWRMutation(loginUrl, login);

  const onSubmit = handleSubmit(async ({ username, password }) => {
    try {
      let formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      await trigger({ formData });
    } catch (error: unknown) {
      let errorMessage = 'Oops, something went wrong!';
      if (axios.isAxiosError(error)) {
        errorMessage = error?.response?.data.detail;
      }
      toast.error(errorMessage);
    }
  });

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

          <form onSubmit={onSubmit} className="mt-6 m-auto max-w-xs">
            <div>
              <input
                className="h-10 w-full border-b-2 pl-2 text-sm"
                type="email"
                placeholder="Email"
                {...register('username', { required: true })}
              />
            </div>
            {errors.username && <span>This field is required</span>}

            <div className="mt-2">
              <input
                className="h-10 w-full border-b-2 pl-2 text-sm"
                type="password"
                placeholder="Password"
                {...register('password', { required: true })}
              />
            </div>

            {errors.password && <span>This field is required</span>}

            <button
              type="submit"
              className="w-full h-9 mt-4 bg-black text-white text-sm rounded"
            >
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
