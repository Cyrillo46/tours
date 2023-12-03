import { Tour } from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div>
        <h2>Our Tours</h2>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
