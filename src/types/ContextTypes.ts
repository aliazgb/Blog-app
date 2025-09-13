import { SigninInput, SignupInput, User } from "./Signup";

export type UserContext = {
    _id: string;
    name: string;
    email: string;
    avatarUrl?: string
};

export type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
};


export type AuthAction =
    | { type: "loading" }
    | { type: "signin"; payload: User }
    | { type: "signup"; payload: User }
    | { type: "user/loaded"; payload: User }
    | { type: "rejected"; payload: string }
    | { type: "logout" };

export type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    Signin: (values: SigninInput) => Promise<void>;
    Signup: (values: SignupInput) => Promise<void>;
    getUser: () => Promise<void>;
    logout: () => Promise<void>;
};

export type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  };
  