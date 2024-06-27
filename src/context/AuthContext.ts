import { createContext } from "react";

export const AuthContext = createContext({
  currentlyLoggedIn: false,
  setCurrentlyLoggedIn: (value: boolean) => {}
});

