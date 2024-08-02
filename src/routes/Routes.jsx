import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter, // Add this line to import createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Prices from "./Prices";
import Setmore from "./Setmore";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/verygabi" element={<Prices />} />
    <Route index element={<></>} />
    <Route path="/prices" element={<Prices />} />
    <Route path="/bookings" element={<Setmore />} />
  </Route>
);
const router = createBrowserRouter(routes);

export default function Routes() {
  return <RouterProvider router={router} />;
}
