import { useState } from "react";

export const Tour = ({ id, price, info, image, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <span>${price}</span>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Show More"}
        </button>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </section>
  );
};
