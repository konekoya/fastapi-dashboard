import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      <div className="flex bg-white w-2/3 max-w-3xl max-h-96">
        <div className="w-2/4 p-6">
          <h1 className="font-logo text-xl uppercase">_Dashboard</h1>

          <div className="form-head m-auto max-w-xs">
            <h2 className="font-semibold text-center mt-16">
              Welcome back, Olivia
            </h2>
            <span className="mt-2 text-xs text-center text-gray-500 block">
              Welcome back! Please enter your details.
            </span>
          </div>

          <form className="mt-6 m-auto max-w-xs">
            <div>
              <input
                className="h-10 w-full border-b-2 pl-2 text-sm"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mt-2">
              <input
                className="h-10 w-full border-b-2 pl-2 text-sm"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full h-9 mt-4 bg-black text-white text-sm rounded">
              Log in
            </button>

            <p className="mt-4 text-gray-500 text-xs text-center">
              Dont have an account?{' '}
              <a className="text-primary-main">Sign up for free</a>
            </p>
          </form>
        </div>
        <div className="slides bg-blue-700 w-2/4"></div>
      </div>
    </div>
  );
};

export default Login;
