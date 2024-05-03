import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

export default function Rating({ num }) {
  const [star, setStar] = useState(5);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };

  return (
    <ReactStars
      onChange={onChange}
      value={num}
      edit={true}
      activeColors={["orange"]}
    />
  );
}
