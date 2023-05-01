import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import React from "react";
import Loading from "../components/Loading";

function Bank() {
  const { logout, user, loginWithRedirect, isLoading } = useAuth0();
  const { name, picture, email } = user;
  if (isLoading) return (<Loading/>);
  return (
        <div className="flex flex-col items-center justify-center">
          <button onClick={() => loginWithRedirect()}>Log In</button>
          <button
              className="w-60 relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => logout({ logoutParams: { returnTo: 'http://localhost:3000'}})}>Sign Out
          </button>
          WELCOME {name}!
        </div>
  );
}

export default withAuthenticationRequired(Bank, {
  loginOptions: () => <button onClick={() => {const {loginWithRedirect} = useAuth0; loginWithRedirect()}}>Log In</button>,
  returnTo: () => window.location.origin + window.location.pathname,
  onRedirecting: () => <Loading/>,
});