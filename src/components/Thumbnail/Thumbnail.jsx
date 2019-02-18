import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./_Thumbnail.scss";

const Thumbnail = ({ imgSrc, title, subtitle, href }) => (
  <figure className="Thumbnail">
    <img src={imgSrc} alt="" />
    <figcaption>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to={href}>View more</Link>
    </figcaption>
  </figure>
);

Thumbnail.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  href: PropTypes.string
};

export default Thumbnail;
