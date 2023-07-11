// ** MUI Imports
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Fragment, useEffect } from "react";

// ** MUI Imports
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { DateTime } from "luxon";

// ** Icon Imports
import Icon from "../../core/components/icon";
import { useContext, useState } from "react";
import { WordsContext } from "../../context/WordsContext";
import Box from "@mui/material/Box/Box";
import { httpGet, httpPost } from "../../httpClient";
import api from "../../httpClient/api";
import { Word } from "../../types/types";
import Spinner from "../../core/components/spinner";

const PracticeCard = () => {
  const { words, setWords } = useContext(WordsContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortedWords, setSortedWords] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [status, setStatus] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>(
    "You are temporarily done; please come back later to review more words."
  );
  const handleShowDescription = () => {
    setStatus(1);
  };

  const getWords = async () => {
    const res = await httpGet(api.getWords);
    setWords(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getWords();
  }, []);

  useEffect(() => {
    let displayWords: Word[] = [];
    console.log("words", words);
    const learnBins = words.filter((word) => word.wrongCount < 10);
    const hardToRememberBins = words.filter((word) => word.wrongCount === 10);
    console.log("hardToRememberBins", hardToRememberBins);

    const wordsInHigerBin = learnBins.filter((word) => word.bin > 0);
    console.log("wordsInHigerBin", wordsInHigerBin);
    const wordsInZeroBin = learnBins.filter((word) => word.bin === 0);
    console.log("wordsInZeroBin", wordsInZeroBin);

    if (wordsInHigerBin.length) {
      const wordsWithNegativeTime = wordsInHigerBin.filter(
        (word) => word.timeToNextAppearance <= Date.now()
      );
      console.log("wordsWithNegativeTime", wordsWithNegativeTime);

      wordsWithNegativeTime.sort((a, b) => a.bin - b.bin);
      console.log("wordsWithNegativeTime sorted", wordsWithNegativeTime);

      displayWords = displayWords.concat(wordsWithNegativeTime);
    }
    displayWords = displayWords.concat(wordsInZeroBin);
    console.log("displayWords", displayWords);
    if (hardToRememberBins.length === words.length) {
      setStatusMessage(
        "You have no more words to review, you are permanently done."
      );
    } else if (!displayWords.length) {
      setStatusMessage(
        "You are temporarily done; please come back later to review more words."
      );
    }
    setSortedWords(displayWords);
  }, [words]);

  const handleIGotIt = async (_id: string) => {
    const bin = sortedWords[currentWordIndex]?.bin + 1;

    const timeToNextAppearance = getNextTimeToAppearance(bin);
    const res = await httpPost(api.updateWord + `/${_id}`, {
      bin,
      timeToNextAppearance,
      updateFields: ["bin", "timeToNextAppearance"],
    });
    setCurrentWordIndex(currentWordIndex + 1);
    setStatus(0);
  };
  const handleIDidNotGetIt = async (_id: string) => {
    const wrongCount = sortedWords[currentWordIndex]?.wrongCount + 1;
    const bin = wrongCount === 10 ? -1 : sortedWords[currentWordIndex]?.bin;
    const timeToNextAppearance = getNextTimeToAppearance(bin);
    const res = await httpPost(api.updateWord + `/${_id}`, {
      wrongCount,
      bin,
      timeToNextAppearance,
      updateFields: ["wrongCount", "bin", "timeToNextAppearance"],
    });

    setCurrentWordIndex(currentWordIndex + 1);
    setStatus(0);
    const hardToRememberBins = words.filter((word) => word.wrongCount === 10);
    if (hardToRememberBins.length === words.length) {
      setStatusMessage(
        "You have no more words to review, you are permanently done."
      );
    }
  };

  const getNextTimeToAppearance = (bin: number) => {
    switch (bin) {
      case 1:
        return DateTime.now().plus({ seconds: 5 }).toMillis();
      case 2:
        return DateTime.now().plus({ seconds: 25 }).toMillis();
      case 3:
        return DateTime.now().plus({ minutes: 2 }).toMillis();
      case 4:
        return DateTime.now().plus({ minutes: 10 }).toMillis();
      case 5:
        return DateTime.now().plus({ hours: 1 }).toMillis();
      case 6:
        return DateTime.now().plus({ hours: 5 }).toMillis();
      case 7:
        return DateTime.now().plus({ days: 1 }).toMillis();
      case 8:
        return DateTime.now().plus({ days: 5 }).toMillis();
      case 9:
        return DateTime.now().plus({ days: 25 }).toMillis();
      case 10:
        return DateTime.now().plus({ months: 4 }).toMillis();
      default:
        return -1;
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {sortedWords[currentWordIndex]?.word ? (
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
                height: 400,
              }}
            >
              {status === 0
                ? sortedWords[currentWordIndex].word
                : sortedWords[currentWordIndex].description}
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
                <Button
                  onClick={() =>
                    handleIGotIt(sortedWords[currentWordIndex]._id)
                  }
                  variant="contained"
                  size="medium"
                >
                  I got it.
                </Button>
                <Button
                  onClick={() =>
                    handleIDidNotGetIt(sortedWords[currentWordIndex]._id)
                  }
                  variant="contained"
                  size="medium"
                >
                  I did not get it.
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      ) : (
        statusMessage
      )}
    </>
  );
};

export default PracticeCard;
