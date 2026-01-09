import { create } from "zustand";

type User = { username: string; token: string };

type State = {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
};

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));