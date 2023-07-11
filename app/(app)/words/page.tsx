"use client";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Icon from "../../core/components/icon";

import Dialog from "@mui/material/Dialog";
import CardGrid from "./DisplayCards";
import AddNewWord from "./AddNewWord";
import { WordsContext } from "../../context/WordsContext";
import { httpGet, httpPost } from "../../httpClient";
import api from "../../httpClient/api";
import { httpDelete } from "../../httpClient";
import { useContext, useEffect, useState } from "react";
import Spinner from "../../core/components/spinner";
import { strings as STRINGS } from "../../constants/constants";

const WordsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { words, setWords } = useContext(WordsContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getWords = async () => {
    const res = await httpGet(api.getWords);
    setWords(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getWords();
  }, []);

  const handleDelete = async (_id: string) => {
    setIsLoading(true);
    const res = await httpDelete(api.deleteWord + `/${_id}`);
    getWords();
    if (res) {
      return true;
    }
    return false;
  };

  const handleEdit = async (
    _id: string,
    data: { word: string; description: string }
  ) => {
    setIsLoading(true);
    const res = await httpPost(api.deleteWord + `/${_id}`, {
      ...data,
      updateFields: ["word", "description"],
    });
    getWords();
    if (res) {
      return true;
    }
    return false;
  };

  const addWord = async (data: { word: string; description: string }) => {
    setIsLoading(true);
    const res = await httpPost(api.addWord, data);
    getWords();
    if (res) {
      return true;
    }
    return false;
  };

  const handleClickOpen = () => setOpen(true);

  const handleDialogClose = () => setOpen(false);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Box
        sx={{
          mb: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Fab
          color="primary"
          variant="extended"
          sx={{ "& svg": { mr: 1 } }}
          onClick={handleClickOpen}
        >
          <Icon icon="tabler:plus" />
          {STRINGS.BUTTON_ADD}
        </Fab>
      </Box>
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <AddNewWord addWord={addWord} onClose={handleDialogClose} />
      </Dialog>

      <CardGrid
        words={words}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default WordsPage;
