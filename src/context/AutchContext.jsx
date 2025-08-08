import { signinApi } from "@/services/authService";

const { createContext, useContext } = require("react");

const AutchContext = createContext;
const initialContext = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

function authReducer(state, action) {
    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }


}

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialContext
  );
  async function Signin() {
    try {
      const { user, message } = await signinApi(values);
      toast.success(message);
      console.log("first");
      //   router.push("/profile")
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
  function Signup() {}
  return (
    <AutchContext.Provider
      value={{ user, isAuthenticated, isLoading, Signin, Signup }}
    >
      {children}
    </AutchContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AutchContext);
  if (context === undefined) throw new Error("not found Auth context");
  return context;
}
