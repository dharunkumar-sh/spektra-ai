"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  name: string;
  email: string;
  avatar?: string;
  provider?: string;
}

interface AuthContextType {
  user: User | null;
  isOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Load persisted mock session if available
  useEffect(() => {
    const savedUser = localStorage.getItem("spektra_auth_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("spektra_auth_user");
      }
    }
  }, []);

  const openAuthModal = () => {
    setIsOpen(true);
  };

  const closeAuthModal = () => {
    setIsOpen(false);
  };

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("spektra_auth_user", JSON.stringify(userData));
    closeAuthModal();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("spektra_auth_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isOpen,
        openAuthModal,
        closeAuthModal,
        login,
        logout,
      }}
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
