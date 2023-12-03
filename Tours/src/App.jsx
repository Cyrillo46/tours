import { useEffect, useState } from "react";
import "./App.css";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const tour = await response.json();
    setTours(tour);
    console.log(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Remaining</h2>
        <button onClick={fetchTours}>Refresh Tours</button>
      </main>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
}

export default App;
