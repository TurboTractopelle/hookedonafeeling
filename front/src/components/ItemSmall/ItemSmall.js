import React from "react";

const ItemSmall = props => {
  return (
    <li>
      <h2>{props.data.name}</h2>
      <p>some item</p>
    </li>
  );
};

export default ItemSmall;
