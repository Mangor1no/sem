import { Transition } from '@headlessui/react';
import Layout from 'components/Layout';
import { IconCheckboxCheck } from 'constants/Icons';
import { signIn, signUp } from 'data/actions/users';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { delay, validateEmail } from 'utils/helpers';

const AuthPage = () => {
  const tabs = ['signin', 'signup'];

  const router = useRouter();

  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [errors, setErrors] = useState(null);

  const dispatch = useDispatch();

  const handleTab = () => {
    if (currentTab === tabs[0]) return setCurrentTab(tabs[1]);
    return setCurrentTab(tabs[0]);
  };

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

  const handleSignUp = async () => {
    if (username.trim().length === 0) {
      return setErrors({ username: true });
    }
    if (email.trim().length === 0 || !validateEmail(email)) {
      return setErrors({ email: true });
    }
    if (password.trim().length < 6) {
      return setErrors({ password: true });
    }
    if (rePassword !== password) {
      return setErrors({ rePassword: true });
    }
    if (!agreement) {
      return setErrors({ agreement: true });
    }
    setErrors(null);
    const finalData = {
      username,
      email,
      password,
    };
    const register = await dispatch(signUp(finalData));
    if (register) {
      return toast('Sign up successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    }
    return toast.error('Username or email has existed, please try again', {
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
      <div className="mt-[80px] min-h-[800px] md:min-h-[951px] relative overflow-hidden">
        <ToastContainer />
        <Transition
          as="div"
          show={currentTab === tabs[0]}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="flex flex-col flex-grow bg-white absolute top-0 left-0 w-full h-full"
        >
          <img
            src="/images/auth/auth-signin-banner.png"
            alt="auth-banner"
            className="w-full h-full object-cover"
          />
        </Transition>
        <Transition
          as="div"
          show={currentTab === tabs[1]}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="flex flex-col flex-grow bg-white absolute top-0 left-0 w-full h-full"
        >
          <img
            src="/images/auth/auth-signup-banner.png"
            alt="auth-banner"
            className="w-full h-full object-cover"
          />
        </Transition>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center px-4">
          <div
            className="bg-white rounded-md p-8 sm:px-10 sm:py-20 w-[530px] min-w-[330px] h-[670px] md:h-[796px] lg:ml-96"
            style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)' }}
          >
            <div className="flex flex-col items-center justify-between h-full">
              <div className="w-full">
                <p className="uppercase text-xl font-semibold text-center mb-2">
                  {currentTab === tabs[0] ? 'sign in' : 'sign up'}
                </p>
                <p className="font-poppins text-center text-sm mb-10">
                  <span>
                    {currentTab === tabs[0] ? 'New to KOHI?' : 'Already have an account?'}
                  </span>
                  <button type="button" onClick={handleTab} className="text-primary ml-1 font-bold">
                    {currentTab === tabs[0] ? 'Create an account' : 'Sign in'}
                  </button>
                </p>
                <div className="font-poppins">
                  <div className="mb-5">
                    <p className="text-xs text-[#7F7F7F]">Username</p>
                    <input
                      className={`w-full text-sm border-b border-[#212227] focus:outline-none focus:border-primary ${
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
                  {currentTab === tabs[1] && (
                    <div className="mb-5">
                      <p className="text-xs text-[#7F7F7F]">Email</p>
                      <input
                        className={`w-full text-sm border-b border-[#212227] focus:outline-none focus:border-primary ${
                          errors?.email ? 'border-red-600' : ''
                        }`}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      {errors?.email && (
                        <p className="text-xs text-red-600">Email is not correct</p>
                      )}
                    </div>
                  )}
                  <div className="mb-5">
                    <p className="text-xs text-[#7F7F7F]">Password</p>
                    <input
                      className={`w-full text-sm border-b border-[#212227] focus:outline-none focus:border-primary ${
                        errors?.password ? 'border-red-600' : ''
                      }`}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    {errors?.password && (
                      <p className="text-xs text-red-600">
                        Password must be more than 6 characters
                      </p>
                    )}
                  </div>
                  {currentTab === tabs[1] && (
                    <>
                      <div className="mb-5">
                        <p className="text-xs text-[#7F7F7F]">Confirm password</p>
                        <input
                          className={`w-full text-sm border-b border-[#212227] focus:outline-none focus:border-primary ${
                            errors?.rePassword ? 'border-red-600' : ''
                          }`}
                          type="password"
                          onChange={(e) => setRePassword(e.target.value)}
                          value={rePassword}
                        />
                        {errors?.rePassword && (
                          <p className="text-xs text-red-600">
                            Confirm password must be the same as password
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label htmlFor="agreement" className="flex items-center text-xs mb-16">
                          <input
                            type="checkbox"
                            id="agreement"
                            checked={agreement}
                            onChange={() => setAgreement(!agreement)}
                            className={`appearance-none ${
                              errors?.agreement ? 'border-red-600' : ''
                            } w-4 h-4 min-w-4 border border-bgPrimary checked:border-primary checked:bg-primary mr-2 cursor-pointer rounded-[4px]`}
                          />
                          <div className="absolute left-[3px]">
                            <IconCheckboxCheck />
                          </div>
                          <span className="ml-1">
                            I agree with the <span className="text-primary">Terms of Use</span> and{' '}
                            <span className="text-primary">Privacy Policy</span>.
                          </span>
                        </label>
                      </div>
                    </>
                  )}
                  {currentTab === tabs[0] && (
                    <div className="flex items-center justify-between mb-16">
                      <div className="relative">
                        <label htmlFor="remember" className="flex items-center text-xs">
                          <input
                            type="checkbox"
                            id="remember"
                            className="appearance-none w-4 h-4 min-w-4 border border-bgPrimary checked:border-primary checked:bg-primary mr-2 cursor-pointer rounded-[4px]"
                          />
                          <div className="absolute left-[3px]">
                            <IconCheckboxCheck />
                          </div>
                          <span className="ml-1">Remember me</span>
                        </label>
                      </div>
                      <button type="button" className="text-primary text-xs">
                        Forgot your password?
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="p-3 w-full text-center text-white bg-primary rounded-md uppercase text-base"
                onClick={currentTab === tabs[0] ? handleSignIn : handleSignUp}
              >
                {currentTab === tabs[0] ? 'Sign in' : 'Create account'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;
