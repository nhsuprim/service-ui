"useClient";

import React, { useState } from "react";

import "./Color.css";
const Color = ({ productData: data }) => {
  const [btnColor, setBtnColor] = useState(data.colors[0]);
  return (
    <div className="flex items-center">
      <p className="font-bold">Colors:</p>
      <p>
        {data.colors.map((color, index) => (
          <button
            style={{ backgroundColor: color }}
            className={btnColor === color ? "btnStyle active" : "btnStyle"}
            key={index}
            onClick={() => setBtnColor(color)}
          ></button>
        ))}
      </p>
    </div>
  );
};

export default Color;
