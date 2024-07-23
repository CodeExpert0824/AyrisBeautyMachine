import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set: (partial: Partial<AuthState>) => void) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;