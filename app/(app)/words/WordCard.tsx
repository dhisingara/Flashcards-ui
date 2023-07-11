// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState } from "react";
import EditWord from "./EditWord";
import { Word } from "../../types/types";
import CountdownTimer from "./countdowntimer/CountdownTimer";
import { toast } from "react-hot-toast";
import { strings as STRINGS } from "../../constants/constants";

const WordCard = ({
  word: { _id, word, description, bin, wrongCount, timeToNextAppearance },
  handleDelete,
  handleEdit,
}: {
  word: Word;
  handleDelete: (_id: string) => Promise<boolean>;
  handleEdit: (
    _id: string,
    { word, description }: { word: string; description: string }
  ) => Promise<boolean>;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

  const handleClickOpen = () => setOpen(true);
  const handleDeleteClickOpen = () => setDeleteOpen(true);

  const handleDialogClose = () => setOpen(false);
  const handleDeleteDialogClose = () => setDeleteOpen(false);

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
          sx={{ p: (theme) => `${theme.spacing(3.25, 5, 4.5)} !important` }}
        >
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            {STRINGS.FLASHCARD_WORD}: {word}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            {STRINGS.FLASHCARD_DESCRIPTION} : {description}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            {STRINGS.FLASHCARD_BIN_NUMBER}:{" "}
            {bin === -1 ? "Hard to Remember" : bin}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            {STRINGS.FLASHCARD_TIME_TO_NEXT_APPEARENCE} :
            <CountdownTimer
              targetDate={timeToNextAppearance}
              hardToRemember={wrongCount >= 10}
            />
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "common.white" }}>
            {STRINGS.FLASHCARD_WRONG_COUNT} : {wrongCount}
          </Typography>
        </CardContent>
        <Box
          sx={{
            gap: 5,
            m: 5,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={handleClickOpen}
            type="submit"
            variant="contained"
            size="small"
          >
            {STRINGS.BUTTON_EDIT}
          </Button>
          <Button
            onClick={() => {
              handleDeleteClickOpen();
            }}
            type="submit"
            variant="contained"
            size="small"
          >
            {STRINGS.BUTTON_DELETE}
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
      <Dialog
        onClose={handleDeleteDialogClose}
        aria-labelledby="simple-dialog-title"
        open={deleteOpen}
      >
        <Typography variant="h6" sx={{ mb: 3, p: 20 }}>
          {STRINGS.ARE_YOU_SURE}
        </Typography>
        <Box
          sx={{
            p: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => {
              handleDeleteDialogClose();
            }}
            variant="contained"
            size="medium"
          >
            {STRINGS.BUTTON_NO}
          </Button>
          <Button
            onClick={async () => {
              handleDeleteDialogClose();
              const result = await handleDelete(_id);
              if (result) {
                toast.success(STRINGS.TOAST_MESSAGE_WORD_DELETED_SUCCESS);
              } else {
                toast.error(STRINGS.TOAST_MESSAGE_WORD_DELETED_FAIL);
              }
            }}
            variant="contained"
            size="medium"
          >
            {STRINGS.BUTTON_YES}
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default WordCard;
