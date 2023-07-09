"use client";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon from "../../core/components/icon";
import { useState } from "react";

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
import CardImgTop from "./DisplayCards";
import FormLayoutsBasic from "./AddNewWord";

const WordsPage = () => {
  // ** Hooks
  const [open, setOpen] = useState<boolean>(false);

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
        <FormLayoutsBasic onClose={handleDialogClose} />
      </Dialog>

      <CardImgTop />
    </>
  );
};

export default WordsPage;
