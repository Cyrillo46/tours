export const Tour = ({ id, price, info, image, name, removeTour }) => {
  return (
    <section>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <span>${price}</span>
        <p>{info}</p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </section>
  );
};
