import { createContext, Dispatch, SetStateAction } from "react";

export interface ThemeContextType {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}
//Dispatch: 상태 업데이트 함수 타입
//SetStateAction: 상태 업데이트 함수의 인자 타입

export const ThemeContext = createContext<ThemeContextType | null>(null);
