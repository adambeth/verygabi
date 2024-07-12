import "./App.css";
import { Box } from "./Box";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import Prices from "./routes/Prices"; // Your Prices component
import Setmore from "./routes/Setmore"; // Your Booking component
// https://tanstack.com/router/latest/docs/framework/react/quick-start
//session storage
function App() {
  return (
    <>
      <Header />
      <Box>
        <Routes>
          <Route path="/prices" element={<Prices />} />
          <Route path="/bookings" element={<Setmore />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
