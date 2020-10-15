import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const MenuItem = ({ title, image, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// default props
MenuItem.defaultProps = {
  title: "UNKNOWN",
};

// VALIDATION PROPS
MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.isRequired,
};

export default MenuItem;
