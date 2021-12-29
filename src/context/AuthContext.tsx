import { createContext, ReactNode, useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { authentication, database } from "../lib/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  deleteUser,
} from "firebase/auth";
import { ref, remove } from "firebase/database";

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
  deleteUserFirebase: () => void;
  signout: () => void;
  handleClickToOpenOutputModal: () => void;
  handleClickToOpenModalDeleteUser: () => void;
  modalExitOrDelete: boolean;
  handleCloseModal: () => void;
  modalOpenOrClose: boolean;
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
  const [modalExitOrDelete, setModalExitOrDelete] = useState(false);
  const [modalOpenOrClose, setModalOpenOrClose] = useState(false);
  const [notificationDeleteUser, setNotificationDeleteUser] = useState(false);
  const notificationEmailError = () =>
    toast.error("Email já cadastrado, Tente logar com outro provedor!");

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (notificationDeleteUser) {
      const resolveAfter3Sec = new Promise(resolve =>
        setTimeout(resolve, 3000)
      );
      toast.promise(resolveAfter3Sec, {
        pending: "Deletando Usuário",
        success: "Usuário Deletedo 👌",
        error: "Promise rejected 🤯",
      });
    }
  }, [notificationDeleteUser]);

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
        return notificationEmailError();
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
        return notificationEmailError();
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

  const deleteUserFirebase = async () => {
    const user = authentication.currentUser;
    try {
      if (user) {
        await deleteUser(user);
        await remove(ref(database, `users/${user?.uid}`));
        signout();
        setNotificationDeleteUser(true);
        setNotificationDeleteUser(false);
      }
    } catch {
      return;
    }
  };

  const handleClickToOpenOutputModal = () => {
    setModalOpenOrClose(true);
    setModalExitOrDelete(false);
  };

  const handleClickToOpenModalDeleteUser = () => {
    setModalOpenOrClose(true);
    setModalExitOrDelete(true);
  };

  const handleCloseModal = () => {
    setModalOpenOrClose(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signInGoogle,
        user,
        signout,
        isLogged,
        signInGithub,
        deleteUserFirebase,
        handleClickToOpenOutputModal,
        handleClickToOpenModalDeleteUser,
        modalExitOrDelete,
        handleCloseModal,
        modalOpenOrClose,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
