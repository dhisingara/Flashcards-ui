// ** MUI Imports
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import CardTwitter from "./WordCard";
import { useContext, useEffect, useState } from "react";
import { WordsContext } from "../../context/WordsContext";

const CardImgTop = () => {
  const { words, setWords } = useContext(WordsContext);

  return (
    <>
      <Grid container spacing={6}>
        {words.map((word) => (
          <Grid item xs={12} sm={6} md={4} sx={{ cursor: "pointer" }}>
            <CardTwitter key={word.id} word={word} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardImgTop;
