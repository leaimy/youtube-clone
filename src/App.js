import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import routers from "./routes";

import { Navbar } from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        {routers.map((router) => (
          <Route
            path={router.path}
            exact={router.exact}
            element={router.component}
          />
        ))}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
