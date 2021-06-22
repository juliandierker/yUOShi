import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function Icon(props) {
  const { color, label, size, inverted, inactive, name, onClick, rotate, className } = props;

  const iconColor = color ? color : "black";

  const mask = `url(/assets/Icons/${name}.svg) no-repeat center`

  return (
    <div 
    className={classnames("pu icon", {
      ["-" + size]: size,
      ["-" + label]: !!label,
      "-clickable": onClick,
      rotateSetting: rotate,
      [className]: className
    })}
    style={{backgroundColor:iconColor,  WebkitMask: mask, Mask: mask}} />
  )

  // return (
  //   <div 
  //     onClick={onClick}
  //     className={classnames("pu icon", {
  //       ["-" + size]: size,
  //       ["-" + label]: !!label,
  //       "-clickable": onClick,
  //       rotateSetting: rotate,
  //       [className]: className
  //     })}
  //     style={{backgroundColor: iconColor, mask: mask}}
  //     alt="Icon"
  //   />
  // )

  // return (
  //   <img
  //     onClick={onClick}
  //     className={classnames("pu icon", {
  //       ["-" + size]: size,
  //       ["-" + label]: !!label,
  //       "-clickable": onClick,
  //       rotateSetting: rotate,
  //       [className]: className
  //     })}
  //     src={`/assets/Icons/${name}${inactive ? "Inactive" : ""}${
  //       inverted ? "Inverted" : ""
  //       }.svg`}
  //     alt={`Icon`}
  //   />
  // );
}
Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  className: PropTypes.string,
  inverted: PropTypes.bool,
  inactive: PropTypes.bool,
  rotate: PropTypes.bool,
  label: PropTypes.oneOf(["left", "right"])
};
