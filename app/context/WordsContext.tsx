"use client";
import { createContext, useState, ReactNode } from "react";

import { WordsValuesType } from "./types";
import { Word } from "../types/types";
const defaultProvider: WordsValuesType = {
  words: [],
  setWords: () => {},
};

const WordsContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const WordsProvider = ({ children }: Props) => {
  // ** States
  const [words, setWords] = useState<Word[]>([]);

  const values = {
    words,
    setWords,
  };

  return (
    <WordsContext.Provider value={values}>{children}</WordsContext.Provider>
  );
};

export { WordsContext, WordsProvider };
