import ResultBadge from "./result-badge";
import type { JsonProps } from "../ types / types";

export default function ResultsCard(data: JsonProps[]) {
  let result;

  data.map((item) => {
    result = item.score;
  });

  return (
    <div className="results-card">
      <div className="results-card__content">
        <h2 className="results-card__title">Your Results</h2>
        <Resultbadge result={result} />
        <p className="results-card__score">Great</p>
        <p className="results-card__description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
