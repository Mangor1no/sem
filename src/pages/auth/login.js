import Layout from 'components/Layout';
import { signIn } from 'data/actions/users';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Slide, toast } from 'react-toastify';
import { delay } from 'utils/helpers';

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    if (username.trim().length === 0) {
      return setErrors({ username: true });
    }
    if (password.trim().length < 6) {
      return setErrors({ password: true });
    }
    setErrors(null);
    const finalData = {
      username,
      password,
    };
    const login = await dispatch(signIn(finalData));
    if (login) {
      toast('Sign in successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return delay(2000).then(() => router.push('/'));
    }
    return toast.error('Username or password is not correct, please try again', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };

  return (
    <Layout>
      <div className="h-[560px] min-h-[560px] w-full relative">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10">
            <p className="text-2xl text-black-100 font-bold capitalize">Login</p>
            <p className="uppercase text-base font-neue">
              home // <span className="text-blue-100">Login</span>
            </p>
          </div>
          <img
            src="/images/products/banner.png"
            alt="banner"
            className="max-w-[723px] absolute bottom-0 right-32 hidden md:block"
          />
        </div>
      </div>
      <div className="py-16 px-6 lg:px-32 xl:px-60 3xl:px-[370px]">
        <div className="py-16 px-6 lg:px-32 xl:px-60 3xl:px-[370px]">
          <div className="flex flex-col items-center justify-between h-full">
            <div className="w-full">
              <div className="">
                <div className="mb-6">
                  <p className="text-sm text-black-50 font-neue mb-4">Username</p>
                  <input
                    className={`w-full px-4 py-3 border border-black-10${
                      errors?.username ? 'border-red-600' : ''
                    }`}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                  {errors?.username && (
                    <p className="text-xs text-red-600">Username must not be blank</p>
                  )}
                </div>
                <div className="mb-6">
                  <p className="text-sm text-black-50 font-neue mb-4">Password</p>
                  <input
                    className={`w-full px-4 py-3 border border-black-10${
                      errors?.password ? 'border-red-600' : ''
                    }`}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  {errors?.password && (
                    <p className="text-xs text-red-600">Password must be more than 6 characters</p>
                  )}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full p-3 btn-secondary uppercase text-base"
              onClick={handleSignIn}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
