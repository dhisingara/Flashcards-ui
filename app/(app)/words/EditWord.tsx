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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

interface FormData {
  word: string;
  description: string;
}

const schema = yup.object().shape({
  word: yup.string().required(),
  description: yup.string().required(),
});

const EditNewWord = ({
  word: { _id, word, description },
  onClose,
  handleEdit,
}: {
  word: { word: string; _id: string; description: string };
  onClose: () => void;
  handleEdit: (
    _id: string,
    { word, description }: { word: string; description: string }
  ) => Promise<boolean>;
}) => {
  // ** States
  const defaultValues = {
    word,
    description,
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleOnsubmit = async (data: FormData) => {
    const { word, description } = data;
    const result = await handleEdit(_id, { word, description });
    if (result) {
      toast.success("Word edited successfully");
    } else {
      toast.error("Failed to edit the word");
    }
    onClose();
  };

  return (
    <Card>
      <CardHeader title="Edit Word" />
      <CardContent>
        <form
          onSubmit={handleSubmit(
            handleOnsubmit as SubmitHandler<{
              word: string;
              description: string;
            }>
          )}
        >
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name="word"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      fullWidth
                      label="Word"
                      placeholder="Abject"
                      autoFocus
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={Boolean(errors.word)}
                      helperText="A difficult word you want to learn and remember"
                    />
                  )}
                />
                {errors.word && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.word.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      fullWidth
                      type="text"
                      label="Description"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={Boolean(errors.description)}
                      placeholder="Of the most contemptible kind"
                      helperText="Meaning or description of the above word"
                    />
                  )}
                />
                {errors.description && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.description.message}
                  </FormHelperText>
                )}
              </FormControl>
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

export default EditNewWord;
