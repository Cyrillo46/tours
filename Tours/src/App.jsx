import { useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = "https://course-api.com/react-tours-project";
  return (
    <>
      <h2>Welcome to our tours!</h2>
    </>
  );
}

export default App;
