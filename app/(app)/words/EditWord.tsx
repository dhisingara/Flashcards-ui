import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { strings as STRINGS } from "../../constants/constants";

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
      toast.success(STRINGS.TOAST_MESSAGE_WORD_EDITED_SUCCESS);
    } else {
      toast.error(STRINGS.TOAST_MESSAGE_WORD_EDITED_FAIL);
    }
    onClose();
  };

  return (
    <Card>
      <CardHeader title={STRINGS.TITLE_EDIT_NEW_WORD} />
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
                      label={STRINGS.LABEL_WORD}
                      placeholder={STRINGS.PLACEHOLDER_WORD}
                      autoFocus
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={Boolean(errors.word)}
                      helperText={STRINGS.HELPER_TEXT_WORD}
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
                      label={STRINGS.LABEL_DESCRIPTIONS}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={Boolean(errors.description)}
                      placeholder={STRINGS.PLACEHOLDER_DESCRIPTION}
                      helperText={STRINGS.HELPER_TEXT_DESCRIPTION}
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
                  {STRINGS.EDIT_WORD}
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
