import { useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador/Buscador";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Encontre o seu Pokemon</h1>
      <Buscador />
    </div>
  );
}

export default App;
