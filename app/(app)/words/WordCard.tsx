// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState } from "react";

import EditWord from "./EditWord";
import Icon from "../../core/components/icon";
import { Word } from "../../types/types";
import CountdownTimer from "./countdowntimer/CountdownTimer";

const WordCard = ({
  word: { _id, word, description, bin, wrongCount, timeToNextAppearance },
  handleDelete,
  handleEdit,
}: {
  word: Word;
  handleDelete: (_id: string) => void;
  handleEdit: (
    _id: string,
    { word, description }: { word: string; description: string }
  ) => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => setOpen(true);

  const handleDialogClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          border: 0,
          boxShadow: 0,
          color: "common.white",
          backgroundColor: "#4e5f6b",
          height: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent
          onClick={handleClickOpen}
          sx={{ p: (theme) => `${theme.spacing(3.25, 5, 4.5)} !important` }}
        >
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            Word: {word}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            Description: {description}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            Bin Number: {bin === -1 ? "Hard to Remember" : bin}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            Time To Next Appearance:
            <CountdownTimer
              targetDate={timeToNextAppearance}
              hardToRemember={wrongCount >= 10}
            />
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            No of Times Answered Incorrect: {wrongCount}
          </Typography>
        </CardContent>
        <Box
          sx={{
            gap: 5,
            m: 5,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => handleDelete(_id)}
            type="submit"
            variant="contained"
            size="small"
          >
            Delete
          </Button>
        </Box>
      </Card>
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <EditWord
          word={{ word, _id, description }}
          handleEdit={handleEdit}
          onClose={handleDialogClose}
        />
      </Dialog>
    </>
  );
};

export default WordCard;
