"use client";

import {
  getUserApi,
  logoutApi,
  signinApi,
  signupApi,
} from "@/services/authService";
import { useRouter } from "next/navigation";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import toast from "react-hot-toast";
import { AuthAction, AuthContextType, AuthState } from "types/ContextTypes";
import { SignupInput, User } from "types/Signup";

const AutchContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "signin":
      // return { user: action.payload, isAuthenticated: true };
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "signup":
      // return { user: action.payload, isAuthenticated: false };
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case "user/loaded":
      // return { user: action.payload, isAuthenticated: true };
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "rejected":
      return { ...state, error: action.payload, isAuthenticated: false };

    case "logout":
      return initialState;
  }
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const router = useRouter();

  async function Signin(values: SignupInput): Promise<void> {
    dispatch({ type: "loading" });
    try {
      const { user, message }: { user: User; message: string } =
        await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/blogs");
    } catch (err) {
      // const msg = error?.response?.data?.message;
      const error = err as { response?: { data?: { message?: string } } };
      const msg = error.response?.data?.message || "Signin failed";
      dispatch({ type: "rejected", payload: msg });
      toast.error(msg);
    }
  }

  async function Signup(values: SignupInput): Promise<void> {
    dispatch({ type: "loading" });
    try {
      const { user, message }: { user: User; message: string } =
        await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/signin");
    } catch (err) {
      // const msg = error?.response?.data?.message;
      const error = err as { response?: { data?: { message?: string } } };
      const msg = error.response?.data?.message || "Signup failed";
      dispatch({ type: "rejected", payload: msg });
      toast.error(msg);
    }
  }

  async function getUser(): Promise<void> {
    dispatch({ type: "loading" });
    try {
      const { user }: { user: User } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
      router.push("/profile");
    } catch (error) {
      const msg = "Please Login";
      dispatch({ type: "rejected", payload: msg });
      toast.error(msg);
    }
  }
  async function logout(): Promise<void> {
    try {
      await logoutApi();
      router.push("/signin");
      dispatch({ type: "logout" });
    } catch (err) {
      // toast.error(
      //   error?.response?.data?.message || "An error occurred during logout."
      // );
      const error = err as { response?: { data?: { message?: string } } };
      toast.error(
        error.response?.data?.message || "An error occurred during logout."
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

export function useAuth(): AuthContextType {
  const context = useContext(AutchContext);
  if (context === undefined) throw new Error("not found Auth context");
  return context;
}
