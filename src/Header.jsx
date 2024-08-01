import { NavButtons } from "./NavButtons";

export function Header({ setDisplayed }) {
  return (
    <>
      <div className="header">
        <h1>💅🏻 VERYGABI! 💅🏻</h1>
        <NavButtons className="nav" setDisplayed={setDisplayed} />
      </div>
    </>
  );
}
