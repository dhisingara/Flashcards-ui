// ** MUI Imports
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Fragment } from "react";

// ** MUI Imports
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// ** Icon Imports
import Icon from "../../core/components/icon";
import { useContext, useState } from "react";
import { WordsContext } from "../../context/WordsContext";
import Box from "@mui/material/Box/Box";

const PracticeCard = () => {
  const { words } = useContext(WordsContext);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [status, setStatus] = useState<number>(0);
  const handleShowDescription = () => {
    setStatus(1);
  };

  const handleIGotIt = () => {
    setCurrentWordIndex(currentWordIndex + 1);
    setStatus(0);
  };
  const handleIDidNotGetIt = () => {
    setCurrentWordIndex(currentWordIndex + 1);
    setStatus(0);
  };
  return (
    <Card sx={{ width: 400 }}>
      <CardContent sx={{ height: "100%" }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: 600,
          }}
        >
          {status === 0
            ? words[currentWordIndex].word
            : words[currentWordIndex].description}
        </Typography>

        {status === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handleShowDescription}
              variant="contained"
              size="large"
            >
              Show Description
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={handleIGotIt} variant="contained" size="large">
              I got it.
            </Button>
            <Button
              onClick={handleIDidNotGetIt}
              variant="contained"
              size="large"
            >
              I did not get it.
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PracticeCard;
