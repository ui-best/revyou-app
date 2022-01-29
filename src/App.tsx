import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Scanner from "./pages/Scanner";
import Feed from "./pages/Feed";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/scan" element={<Scanner />} />
          <Route path="/feed/:id" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
