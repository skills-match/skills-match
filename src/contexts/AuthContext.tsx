import { useState } from "react";
import { createContext, useContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  isStepCompleted: boolean;
  login: () => void;
  logout: () => void;
  completeSteps: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isStepCompleted, setIsStepCompleted] = useState<boolean>(false);

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
    setIsStepCompleted(false);
  }

  function completeSteps() {
    setIsStepCompleted(true);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isStepCompleted, login, logout, completeSteps }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
