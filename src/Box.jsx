import PropTypes from "prop-types";
export function Box({ children }) {
  return (
    <>
      <section className="box">{children}</section>
    </>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
