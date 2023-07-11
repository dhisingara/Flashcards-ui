// ** MUI Imports
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import WordCard from "./WordCard";

import { Word } from "../../types/types";

const CardGrid = ({
  words,
  handleDelete,
  handleEdit,
}: {
  words: Word[];
  handleDelete: (_id: string) => Promise<boolean>;
  handleEdit: (
    _id: string,
    { word, description }: { word: string; description: string }
  ) => Promise<boolean>;
}) => {
  return (
    <>
      <Grid container spacing={6}>
        {words.map((word) => (
          <Grid key={word._id} item xs={12} sm={6} md={4}>
            <WordCard
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              word={word}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardGrid;
