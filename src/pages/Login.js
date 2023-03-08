import {LockClosedIcon} from '@heroicons/react/20/solid';
import {useState} from 'react';
import bcrypt from 'bcryptjs-react';
import {auth} from '../firebase-config';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {setDoc, doc, getDoc, getFirestore} from "firebase/firestore";
// import {GoogleLogin} from "@react-oauth/google";

const db = getFirestore();
export default function Login() {
  // const [remember, setRemember] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [warn, setWarn] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const salt = signIn ? await getDoc(doc(db, "users", email)).salt : bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password + process.env.REACT_APP_PEPPER, salt);
    if (signIn) {
      signInWithEmailAndPassword(auth, email, hashedPassword)
          .then((userCredential) => {
            alert("Welcome " + userCredential.user.displayName);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            setWarn(errorMessage);
          });
    } else {
      if (password !== passwordConfirmation) setWarn("Passwords do not match");
      else if (password < 8) setWarn("Password must be at least 8 characters");
      else {
        createUserWithEmailAndPassword(auth, email, hashedPassword)
            .then(async (userCredential) => {
              await setDoc(doc(db, "users", email), {salt: salt});
              const user = userCredential.user;
              alert("Welcome" + user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error(errorCode);
              setWarn(errorMessage);
            });
      }
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
            <p className={"text-red-700"}>{warn}</p>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true"/>
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <input
                      type="email"
                      autoComplete="user"
                      onChange={(e) => {setEmail(e.target.value)}}
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email"
                  />
                </div>
                <div>
                  <input
                      type="password"
                      onChange={(e) => {setPassword(e.target.value)}}
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                  />
                </div>
                {!signIn ?
                    <div>
                      <input
                          type="password"
                          onChange={(e) => {setPasswordConfirmation(e.target.value)}}
                          required
                          className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Confirm Password"
                      />
                    </div> : <></>}
              </div>

              {signIn ?
                  <div className="flex items-center justify-end">
                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div> : <></>}

              <div>
                <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleSubmit}
                >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
                  {signIn ? "Sign in" : "Create Account"}
                </button>
                <button
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-800 my-2 text-sm font-medium text-white hover:text-indigo-400"
                    onClick={() => {
                      setSignIn(!signIn);
                      setWarn("");
                    }}
                >
                  {signIn ? "Create Account" : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/*<div className="fixed flex items-center justify-center">*/}
        {/*  <GoogleLogin onSuccess={(e) => console.error(e)} onError={(e) => console.error(e)}/>*/}
        {/*</div>*/}
      </>
  )
}