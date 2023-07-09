// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";

import EditWord from "./EditWord";
import Icon from "../../core/components/icon";
import { Word } from "../../types/types";

const CardTwitter = ({ word: { id, word, description } }: { word: Word }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => setOpen(true);

  const handleDialogClose = () => setOpen(false);
  return (
    <>
      <Card
        onClick={handleClickOpen}
        sx={{
          border: 0,
          boxShadow: 0,
          color: "common.white",
          backgroundColor: "#1D9BF0",
        }}
      >
        <CardContent
          sx={{ p: (theme) => `${theme.spacing(3.25, 5, 4.5)} !important` }}
        >
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            {word}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <EditWord
          word={{ word, id, description }}
          onClose={handleDialogClose}
        />
      </Dialog>
    </>
  );
};

export default CardTwitter;
