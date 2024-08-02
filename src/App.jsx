import "./App.css";
import { Box } from "./Box";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
// investigate routing -https://reactrouter.com/en/main
// https://tanstack.com/router/latest/docs/framework/react/quick-start
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
