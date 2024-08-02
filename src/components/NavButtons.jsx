import { Link } from "react-router-dom";

export function NavButtons() {
  return (
    <>
      <nav>
        {" "}
        <Link to="/prices">Prices</Link>
        <Link to="/bookings">Booking</Link>
        <a>Gallery</a>
        <a>Contact</a>
      </nav>
    </>
  );
}
