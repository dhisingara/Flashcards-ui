"use client";

import Box from "@mui/material/Box/Box";
import PracticeCard from "./PracticeCard";

const PracticePage = () => {
  return (
    <>
      <Box
        sx={{
          m: "auto",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <PracticeCard />
      </Box>
    </>
  );
};

export default PracticePage;
