import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { readUsersData } from "../../utils/usersUtlis";

export const Admin = () => {
  const usersData = readUsersData();

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" mb={2}>Admin page</Typography>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "90vh",
          maxWidth: "100vw",
          minWidth: "90vw",
          overflowX: "auto",
          position: "relative",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Image Set</TableCell>
              <TableCell>Chosen Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  {user.images.map((imgSet, imgIndex) => (
                    <div key={imgIndex} style={{ marginBottom: "5px" }}>
                      {imgSet.imageSet.map((imageUrl, urlIndex) => (
                        <img
                          key={urlIndex}
                          src={imageUrl}
                          alt={`Image ${index + 1}-${urlIndex + 1}`}
                          style={{
                            width: "150px",
                            height: "150px",
                            marginRight: "5px",
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {user.images.map((imgSet, imgIndex) => (
                    <div key={imgIndex} style={{ marginBottom: "5px" }}>
                      <img
                        src={imgSet.chosenImage}
                        alt={`Chosen Image ${index + 1}-${imgIndex + 1}`}
                        style={{ width: "150px", height: "150px" }}
                      />
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
