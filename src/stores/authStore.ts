import { create } from 'zustand';

interface AuthStore {
  message: string;
  action: string;
  setMessage: (value: string) => void;
  setAction: (value: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  message: 'signed in',
  action: 'log in',
  setMessage: (value) => set({ message: value }),
  setAction: (value) => set({ action: value }),
}));
