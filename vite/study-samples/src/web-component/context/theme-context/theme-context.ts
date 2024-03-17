// theme-context.ts
import {createContext} from '@lit/context';

// 'light' 또는 'dark' 문자열을 값으로 가질 수 있는 컨텍스트 생성
type ContextValue = string;
export const ThemeContext = createContext<ContextValue>(Symbol('themecontext')); // 기본값으로 'light' 설정
