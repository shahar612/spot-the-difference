import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { addImagesToUser } from "../../utils/usersUtlis";

export const ImageSelection = () => {
  const location = useLocation();
  const { username } = location.state || {};

  const imageSets = [
    [
      "https://hips.hearstapps.com/hmg-prod/images/green-flowers-green-gerber-daisy-1586803096.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu2EHFUGmLcCmNGm-Ma_Av71HrYCc4FpGgA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0ND_yQCSEbxhIKq49oFLOg15LiohOxj9Ug&s",
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAPjOJbxvDrar6Qnhrz4yaA0jK0PsYB3mpQ&s",
      "https://i.pinimg.com/736x/10/8d/c0/108dc089a8f4fea30d1d9ef9337a81aa.jpg",
      "https://www.katdootje.nl/wp-content/uploads/What-Breed-Are-Black-Cats.webp",
    ],
    [
      "https://m.media-amazon.com/images/I/61Omz1mOuyL._AC_UF894,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VVD73-CTiroI2mlOLlWd-wh9iu2FLEVXBw&s",
      "https://www.ikea.com/us/en/images/products/merete-room-darkening-curtains-1-pair-white__0888085_pe569592_s5.jpg",
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtvILLBbY2-Sm8k2pPPLsbFDZj0r6YsBzIA&s",
      "https://m.media-amazon.com/images/I/71hlPwFQbSL._AC_SL1330_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fI6F5stOHB8JUWQZQwxukLpf7f2VIvW-sQ&s",
    ],
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const handleImageClick = (imageUrl) => {
    try {
      addImagesToUser(username, imageSets[currentSetIndex], imageUrl);
      setCurrentSetIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error("Error updating images:", error);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      {currentSetIndex < imageSets.length && (
        <div>
          <Typography variant="h4" gutterBottom>
            Select the different image
          </Typography>
          <Grid container spacing={2} width="70vw">
            {imageSets[currentSetIndex].map((src, index) => (
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
                  onClick={() => handleImageClick(src)}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {currentSetIndex === imageSets.length && (
        <div>
          <Typography variant="h3" mb={3}>
            You have completed the selections!
          </Typography>
          <Button component={RouterLink} to={"/home"} variant="contained">
            Back to start
          </Button>
        </div>
      )}
    </Box>
  );
};
