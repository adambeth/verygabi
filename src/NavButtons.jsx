import { Link } from "react-router-dom";
export function NavButtons() {
  return (
    <>
      <nav>
        {" "}
        <Link to="/prices">Prices</Link> {/* Use Link components */}
        <Link to="/bookings">Booking</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}
