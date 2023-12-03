export const Tour = ({ id, price, info, image, name }) => {
  return (
    <section>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <span>${price}</span>
        <p>{info}</p>
      </div>
    </section>
  );
};
