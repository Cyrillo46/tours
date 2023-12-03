import { useEffect, useState } from "react";
import "./App.css";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

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

  return <Tours tours={tours} />;
}

export default App;
