import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { addUser, readUsersData } from "../../utils/usersUtlis";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
    setError("");
  };

  const handleStart = () => {
    try {
      addUser(username);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const isUsernameValid = () => {
    const usersData = readUsersData();
    return !usersData.users.some((u) => u.username === username);
  };

  return (
    <Box>
      <TextField
        label="Enter Username"
        name="username"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
        error={!!error}
        helperText={error}
        margin="normal"
      />
      {username && (
        <Button
          component={RouterLink}
          to={isUsernameValid() ? "/images" : "#"}
          state={{ username }}
          variant="contained"
          onClick={handleStart}
        >
          Start
        </Button>
      )}
    </Box>
  );
};
