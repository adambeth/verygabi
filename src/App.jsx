import "./App.css";
import { Box } from "./Box";
import { Header } from "./Header";
import { Prices } from "./Prices";
import { useState } from "react";
import { Setmore } from "./Setmore";
// investigate routing -https://reactrouter.com/en/main
// https://tanstack.com/router/latest/docs/framework/react/quick-start
//session storage
function App() {
  const [displayed, setDisplayed] = useState("price");
  return (
    <>
      <Header setDisplayed={setDisplayed} />
      <Box>
        {displayed === "price" && <Prices />}
        {displayed == "book" && <Setmore />}
      </Box>
    </>
  );
}

export default App;
