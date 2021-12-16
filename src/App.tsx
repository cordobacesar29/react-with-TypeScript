import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";

function App() {
  return (
    <div className="App">
      <h1>Hola mundo - TS</h1>
      <hr/>
      <Counter />
      <Usuario />

      <h2> useEffect - useRef</h2>

      <TimerPadre />
    </div>
  );
}

export default App;
