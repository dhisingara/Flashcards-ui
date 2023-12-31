import { Dispatch, SetStateAction } from "react";
import { Word } from "../types/types";

export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type RegisterParams = {
  email: string;
  userName: string;
  password: string;
};

export type UserDataType = {
  id: number;
  role: string;
  email: string;
  fullName: string;
  userName: string;
  password: string;
  avatar?: string | null;
};

export type AuthValuesType = {
  loading: boolean;
  logout: () => void;
  user: UserDataType | null;
  setLoading: (value: boolean) => void;
  setUser: (value: UserDataType | null) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void;
};

export type WordsValuesType = {
  words: Word[];
  setWords: Dispatch<SetStateAction<Word[]>>;
};
