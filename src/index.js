import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Box, ChakraProvider } from "@chakra-ui/react";
import backgroud from "./asset/background.jpg";
import { Navbar } from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <Box
        backgroundImage={backgroud}
        backgroundRepeat={"no-repeat"}
        minH={"100vh"}
        backgroundSize={"cover"}
      >
        <Box
          backdropFilter={"blur(3px)"}
          border={"0px solid red"}
          minH={"100vh"}
        >
          <Navbar />
          <App />
        </Box>
      </Box>
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
