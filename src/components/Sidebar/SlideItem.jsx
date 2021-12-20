import React from "react";
import { Link } from "react-router-dom";

const SlideItem = ({ menu }) => {
  return (
    <>
      <Link to={`${menu.path}`}>
        <li className="slidebarItem">
          <div style={{ marginRight: 5 }}>{menu.icon}</div>
          <span style={{ fontWeight: "bold" }}>{menu.name}</span>
        </li>
      </Link>
    </>
  );
};

export default SlideItem;
