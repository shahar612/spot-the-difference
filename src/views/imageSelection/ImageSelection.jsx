import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

export const ImageSelection = () => {
  const imageSets = [
    [
      "https://via.placeholder.com/150?text=Image+1A",
      "https://via.placeholder.com/150?text=Image+1B",
      "https://via.placeholder.com/150?text=Image+1C",
    ],
    [
      "https://via.placeholder.com/150?text=Image+2A",
      "https://via.placeholder.com/150?text=Image+2B",
      "https://via.placeholder.com/150?text=Image+2C",
    ],
    [
      "https://via.placeholder.com/150?text=Image+3A",
      "https://via.placeholder.com/150?text=Image+3B",
      "https://via.placeholder.com/150?text=Image+3C",
    ],
    [
      "https://via.placeholder.com/150?text=Image+4A",
      "https://via.placeholder.com/150?text=Image+4B",
      "https://via.placeholder.com/150?text=Image+4C",
    ],
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentSetIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Select an image to proceed to the next set
      </Typography>
      <Grid container spacing={2}>
        {currentSetIndex < imageSets.length &&
          imageSets[currentSetIndex].map((src, index) => (
            <Grid item xs={4} key={index}>
              <Box
                component="img"
                src={src}
                alt={`Image ${currentSetIndex + 1}-${index + 1}`}
                sx={{
                  width: "100%",
                  cursor: "pointer",
                  border: "2px solid transparent",
                  "&:hover": {
                    border: "2px solid #1976d2",
                  },
                }}
                onClick={handleImageClick}
              />
            </Grid>
          ))}

        {currentSetIndex === imageSets.length && (
          <Typography>You have ended the game!</Typography>
        )}
      </Grid>
    </Box>
  );
};
