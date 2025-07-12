import { create } from 'zustand';

interface AuthStore {
  message: string;
  action: string;
  setMessage: (value: string) => void;
  setAction: (value: string) => void;
  updateMessageFromPath: (path: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  message: "",
  action: "",
  setMessage: (value) => set({ message: value }),
  setAction: (value) => set({ action: value }),
  updateMessageFromPath: (path) =>
    set(() => ({
      message: path === "/login" ? "signed up" : "signed in",
      action: path === "/login" ? "sign up" : "log in",
    })),
}));

