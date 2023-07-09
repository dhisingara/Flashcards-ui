// ** React Imports
import { ChangeEvent, SetStateAction, useContext, useState } from "react";

// ** Next Import
import Link from "next/link";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

// ** Icon Imports
import Icon from "../../core/components/icon";
import { Word } from "../../types/types";
import { WordsContext } from "../../context/WordsContext";

interface State {
  password: string;
  showPassword: boolean;
}

const AddNewWord = ({
  word: { id, word: propWord, description: propDescription },
  onClose,
}: {
  word: Word;
  onClose: () => void;
}) => {
  // ** States
  const [word, setWord] = useState<string>(propWord);
  const [description, setDescription] = useState<string>(propDescription);
  const { words, setWords } = useContext(WordsContext);

  const handleWordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setWord(e.target.value);
  };
  const handleDescriptionChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDescription(e.target.value);
  };

  const handleOnsubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setWords((words) => {
      const resultWord = words.find((word) => word.id === id) || ({} as Word);
      resultWord["word"] = word;
      resultWord["description"] = description;
      return words;
    });
    onClose();
  };

  return (
    <Card>
      <CardHeader title="Edit Word" />
      <CardContent>
        <form onSubmit={handleOnsubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Word"
                value={word}
                onChange={handleWordChange}
                placeholder="Abject"
                helperText="A difficult word you want to learn and remember"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                label="Description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Of the most contemptible kind"
                helperText="Meaning or description of the above word"
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button type="submit" variant="contained" size="large">
                  Edit Word
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddNewWord;
