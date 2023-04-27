import {useAuth0} from "@auth0/auth0-react";
import React from "react";

export default function Bank() {
  const { logout, user, loginWithRedirect } = useAuth0();
  // const { name, picture, email } = user;

  return (
        <div className="flex flex-col items-center justify-center">
          <button onClick={() => loginWithRedirect()}>Log In</button>
          <button
              className="w-60 relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => logout({ logoutParams: { returnTo: 'http://localhost:3000'}})}>Sign Out
          </button>
          WELCOME {}!
        </div>
  );
}