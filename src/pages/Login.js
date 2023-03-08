import {LockClosedIcon} from '@heroicons/react/20/solid';
import {useRef, useState} from 'react';
import bcrypt from 'bcryptjs-react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
  const [remember, setRemember] = useState(false);
  const [failed, setFailed] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();
    if (signIn) {
      signInWithEmailAndPassword(auth, bcrypt.hashSync(emailInputRef.current.value + process.env.REACT_APP_PEPPER,),
          bcrypt.hashSync(passwordInputRef.current.value + process.env.REACT_APP_PEPPER,))
          .then((userCredential) => {
            const user = userCredential.user;
            alert("Welcome" + user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFailed(true);
          });
    } else {
      const salt = bcrypt.genSaltSync(10);
    }
  }

  return (
      <>
        <div className="top-0 flex min-h-full items-center justify-center mt-[-10%] py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                  className="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                {signIn ? "Sign in to your account" : "Create an account"}
              </h2>
            </div>
            {failed ? <p className={"text-red-700"}>Authentication Failed: Incorrect Username or Password</p> : <></>}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true"/>
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                      id="email"
                      name="user"
                      type="email"
                      autoComplete="user"
                      ref={emailInputRef}
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      ref={passwordInputRef}
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      onChange={e => setRemember(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="src/pages#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
                  {signIn ? "Sign in" : "Create Account"}
                </button>
                <button
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setSignIn(!signIn)}
                >
                  {signIn ? "Create Account" : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}