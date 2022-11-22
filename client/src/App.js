import React from "react";
import "./App.scss";
import { Box } from "@chakra-ui/react";
import Routes from "./routes";

function App() {
  return (
    <Box maxW="1200px" m="auto" p='auto'>
      <Routes />
    </Box>
  );
}

export default App;
