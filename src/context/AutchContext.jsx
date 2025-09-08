"use client";

import {
  getUserApi,
  logoutApi,
  signinApi,
  signupApi,
} from "@/services/authService";
import { useRouter } from "next/navigation";

import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const AutchContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "signin":
      return { user: action.payload, isAuthenticated: true };

    case "signup":
      return { user: action.payload, isAuthenticated: false };

    case "user/loaded":
      return { user: action.payload, isAuthenticated: true };

    case "rejected":
      return { ...state, error: action.payload, isAuthenticated: false };

    case "logout":
      return initialState;
  }
}

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const router = useRouter();

  async function Signin(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      window.location.href = "/profile";
    } catch (error) {
      const msg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: msg });
      toast.error(msg);
    }
  }

  async function Signup(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/signin");
    } catch (error) {
      const msg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: msg });
      toast.error(msg);
    }
  }

  async function getUser() {
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
      router.push("/profile");
    } catch (error) {
      const msg = "Please Login"
      dispatch({ type: "rejected", payload: msg });
      toast.error(msg);
    }
  }
  async function logout() {
    try {
      await logoutApi();
      router.push("/signin");
      dispatch({ type: "logout" });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An error occurred during logout."
      );
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);
  return (
    <AutchContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        Signin,
        Signup,
        getUser,
        logout,
      }}
    >
      {children}
    </AutchContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AutchContext);
  if (context === undefined) throw new Error("not found Auth context");
  return context;
}
