import {signOut} from "firebase/auth";
import {auth} from '../firebase-config';

export default function Bank() {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      alert("Sign-out successful.")
    }).catch((error) => {
      console.error(error);
    });
  }

  const user = auth.currentUser.email;

  return (
      <>
        <div className="flex flex-col items-center justify-center">
          <button
              className="w-60 relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleSignOut}>Sign Out
          </button>
          WELCOME {user.displayName}!
        </div>
      </>
  );
}