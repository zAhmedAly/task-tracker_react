import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ title, showForm, onClick }) => {
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button
        color={!showForm ? "green" : "red"}
        text={!showForm ? "Add" : "Close"}
        onClick={onClick}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
