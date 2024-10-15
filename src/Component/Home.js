import { useState } from "react";
import About from "./About";

// Home.jsx
const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>Klik {count}</p>
      <button onClick={() => setCount( count + 1)}>
        click me
      </button>
      <About name="namaku" />
    </div>
  ); 
};

export default Home;
