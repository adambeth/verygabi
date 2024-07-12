import PropTypes from "prop-types";

export function NavButtons({ setDisplayed }) {
  return (
    <>
      <nav>
        {" "}
        <a onClick={() => setDisplayed("price")}>Prices</a>
        <a onClick={() => setDisplayed("book")}>Booking</a>
        <a onClick={() => setDisplayed("gallery")}>Gallery</a>
        <a onClick={() => setDisplayed("contact")}>Contact</a>
      </nav>
    </>
  );
}

NavButtons.propTypes = {
  setDisplayed: PropTypes.func.isRequired,
};
