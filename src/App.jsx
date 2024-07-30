import "./App.css";
import { Box } from "./components/Box";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
//session storage
function App() {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
