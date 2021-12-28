import { createContext, ReactNode, useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { authentication } from "../lib/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";

type props = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  avatar: string;
};

type authContextProps = {
  signInGoogle: () => void;
  signInGithub: () => void;
  signout: () => void;
  user: User | null;
  isLogged: boolean;
};

export const AuthContext = createContext({} as authContextProps);

const getUserLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("user");
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }
};

export function AuthProvider({ children }: props) {
  const [user, setUser] = useState<User | null>(getUserLocalStorage);
  const [isLogged, setIsLogged] = useState(false);
  const notify = () =>
    toast.error("Email já cadastrado, Tente logar com outro provedor!");

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(authentication, user => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  const signInGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(authentication, provider);

      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    } catch (error: any) {
      if (error.code === "auth/account-exists-with-different-credential") {
        return notify();
      }
      return;
    }
  };

  const signInGithub = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(authentication, provider);
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Github Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    } catch (error: any) {
      if (error.code === "auth/account-exists-with-different-credential") {
        return notify();
      }
      return;
    }
  };

  const signout = async () => {
    try {
      await signOut(authentication);
      setUser(null);
    } catch {
      return;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signInGoogle,
        user,
        signout,
        isLogged,
        signInGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
