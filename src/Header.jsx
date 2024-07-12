import { NavButtons } from "./NavButtons";

import PropTypes from "prop-types";
Header.propTypes = {
  setDisplayed: PropTypes.func.isRequired,
};
export function Header({ setDisplayed }) {
  return (
    <>
      <div className="header">
        <h1>💅🏻 VERYGABI 💅🏻</h1>
        <NavButtons className="nav" setDisplayed={setDisplayed} />
      </div>
    </>
  );
}
