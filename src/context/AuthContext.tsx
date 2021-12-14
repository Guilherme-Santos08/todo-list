import { createContext, ReactNode, useEffect, useState } from "react";
import { authentication } from "../lib/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

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
  signout: () => void;
  user: User | null;
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

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

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
    } catch {
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
    <AuthContext.Provider value={{ signInGoogle, user, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
