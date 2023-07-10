"use client";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon from "../../core/components/icon";

// ** MUI Imports
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MuiAvatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import DialogTitle from "@mui/material/DialogTitle";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";

// ** Icon Imports

// ** Custom Components Imports
import CustomAvatar from "../../core/components/mui/avatar";
import CardGrid from "./DisplayCards";
import AddNewWord from "./AddNewWord";
import { WordsContext } from "../../context/WordsContext";
import { httpGet, httpPost } from "../../httpClient";
import api from "../../httpClient/api";
import { httpDelete } from "../../httpClient";
import { useContext, useEffect, useState } from "react";

const WordsPage = () => {
  // ** Hooks
  const [open, setOpen] = useState<boolean>(false);
  const { words, setWords } = useContext(WordsContext);

  const getWords = async () => {
    const res = await httpGet(api.getWords);
    setWords(res.data);
  };

  useEffect(() => {
    getWords();
  }, []);

  const handleDelete = async (_id: string) => {
    const res = await httpDelete(api.deleteWord + `/${_id}`);
    console.log(res.data);
    getWords();
  };

  const handleEdit = async (
    _id: string,
    data: { word: string; description: string }
  ) => {
    const res = await httpPost(api.deleteWord + `/${_id}`, {
      ...data,
      updateFields: ["word", "description"],
    });
    console.log(res.data);
    getWords();
  };

  const addWord = async (data: { word: string; description: string }) => {
    const res = await httpPost(api.addWord, data);
    getWords();
  };

  const handleClickOpen = () => setOpen(true);

  const handleDialogClose = () => setOpen(false);

  const handleClose = (value: string) => {
    setOpen(false);
  };

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
          Add
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
