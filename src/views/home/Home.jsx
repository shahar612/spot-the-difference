import { Box, Link, TextField } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Home = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  return (
    <Box>
      <TextField
        label="enter username"
        name="username"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
      ></TextField>

      {username && (
        <Link
          component={RouterLink}
          variant="h4"
          to={"/images"}
          underline="none"
        >
          Start
        </Link>
      )}
    </Box>
  );
};
