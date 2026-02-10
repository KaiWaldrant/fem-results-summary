import "./App.css";
import data from "./data/data.json";
import Result from "./components/result";
import type { JsonProps } from "./types/json";

const typedData = data as JsonProps[];

function App() {
  return (
    <main>
      <Result data={typedData} />
    </main>
  );
}

export default App;
