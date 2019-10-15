import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ModuleTitle from "./ModuleTitle";

const gridLiClasses = classNames(
  "gel-layout__item",
  "gel-1/1",
  "gel-1/2@xs",
  "gel-1/3@m",
  "gel-2/12@l"
);

/**
 * Grid component
 *
 * @param {object} props
 */
const Grid = ({ children, title, classes }) => {
  const renderCards = () => {
    return children.map((child, index) => {
      const gridItemClasses = classNames(gridLiClasses, "grid__item");

      return (
        // eslint-disable-next-line react/no-array-index-key
        <li className={gridItemClasses} key={`card-${index}`}>
          {child}
        </li>
      );
    });
  };

  const gridClasses = classNames("grid", "gs-u-box-size", "gs-u-mv+", {
    [`${classes}`]: classes
  });

  const listClasses = classNames(
    "grid__grid",
    "gel-layout",
    "gel-layout--equal"
  );

  return (
    <Fragment>
      <ModuleTitle title={title} classes="o-slice-spacing" />
      <div className={gridClasses}>
        <div className="gel-wrap">
          <ul className={listClasses}>{renderCards()}</ul>
        </div>
      </div>
    </Fragment>
  );
};

Grid.defaultProps = {
  classes: null
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default Grid;
