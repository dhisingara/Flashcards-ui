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
import { v4 as uuidv4 } from "uuid";

// ** Icon Imports
import Icon from "../../core/components/icon";
import { WordsContext } from "../../context/WordsContext";
import axios from "axios";
import { httpPost } from "../../httpClient";
import api from "../../httpClient/api";

interface State {
  password: string;
  showPassword: boolean;
}

const AddNewWord = ({
  onClose,
  addWord,
}: {
  onClose: () => void;
  addWord: ({
    word,
    description,
  }: {
    word: string;
    description: string;
  }) => void;
}) => {
  const [word, setWord] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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

  const handleOnsubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addWord({ word, description });

    onClose();
  };

  return (
    <Card>
      <CardHeader title="Adding New Word" />
      <CardContent>
        <form onSubmit={handleOnsubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Word"
                placeholder="Abject"
                autoFocus
                value={word}
                onChange={handleWordChange}
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
                  Add Word
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
