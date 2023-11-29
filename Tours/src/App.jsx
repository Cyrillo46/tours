import { useEffect, useState } from "react";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const tour = await response.json();
    console.log(response);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      <h2>Welcome to our tours!</h2>
    </>
  );
}

export default App;
