import { Tour } from "./Tour";

export const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        <h2>Our Tours</h2>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
