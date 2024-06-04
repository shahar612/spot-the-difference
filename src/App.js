import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./views/home/Home";
import { ImageSelection } from "./views/imageSelection/ImageSelection";

function App() {
  return (
    <div className="App">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<ImageSelection />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
