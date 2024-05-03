import React from "react";

const CartAmountBtn = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div>
      <div className="flex mb-2">
        <button className="text-3xl px-3" onClick={() => setDecrease()}>
          -
        </button>
        <p className="text-3xl pr-3">{amount}</p>
        <button className="text-3xl pr-3" onClick={() => setIncrease()}>
          +
        </button>
      </div>
      <button className="btn btn-active btn-primary">Add To Cart</button>
    </div>
  );
};

export default CartAmountBtn;
