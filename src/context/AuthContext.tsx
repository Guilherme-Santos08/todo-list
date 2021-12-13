import { createContext, ReactNode, useEffect, useState } from "react";
import { authentication } from "../lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
  user: User | undefined;
};

export const AuthContext = createContext({} as authContextProps);

const getCollectionLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("user");
    if (data) {
      return JSON.parse(data);
    } else {
      return;
    }
  }
};

export function AuthProvider({ children }: props) {
  const [user, setUser] = useState<User>(getCollectionLocalStorage);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const signInGoogle = async () => {
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
  };

  return (
    <AuthContext.Provider value={{ signInGoogle, user }}>
      {children}
    </AuthContext.Provider>
  );
}
