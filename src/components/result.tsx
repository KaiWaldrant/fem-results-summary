import Summary from "./summary";
// import ResultsCard from "./results-card";
import type { JsonProps } from "../types/json";

interface ResultProps {
  data: JsonProps[];
}

export default function Result({ data }: ResultProps) {
  return (
    <div className="result">
      {/*<ResultsCard />*/}
      <Summary data={data} />
    </div>
  );
}
