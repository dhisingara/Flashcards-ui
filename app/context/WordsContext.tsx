"use client";
// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Types
import {
  AuthValuesType,
  RegisterParams,
  LoginParams,
  ErrCallbackType,
  UserDataType,
  WordsValuesType,
} from "./types";
import { Word } from "../types/types";
import { words as seedData } from "../seedData/data";
// ** Defaults
const defaultProvider: WordsValuesType = {
  words: seedData,
  setWords: () => {},
};

const WordsContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const WordsProvider = ({ children }: Props) => {
  // ** States
  const [words, setWords] = useState<Word[]>(seedData);

  const values = {
    words,
    setWords,
  };

  return (
    <WordsContext.Provider value={values}>{children}</WordsContext.Provider>
  );
};

export { WordsContext, WordsProvider };
