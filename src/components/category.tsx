import type { JsonProps } from "../types/json";

export type CategoryProps = {
  data: JsonProps;
};

const catColor = {
  Reaction: "red",
  Memory: "yellow",
  Verbal: "green",
  Visual: "blue",
};

function getIconPath(jsonPath: string) {
  // Remove the leading "./" and you have the public path
  return jsonPath.replace("./", "/");
}

export default function Category({ data }: CategoryProps) {
  return (
    <div key={data.category} className={`category ${catColor[data.category]}`}>
      <div className="category__content">
        <img
          className="category__icon"
          src={getIconPath(data.icon)}
          alt={data.category}
        />
        <h3 className="category__title">{data.category}</h3>
      </div>
      <p className="category__score">
        <span className="category__score-value">{data.score}</span> / 100
      </p>
    </div>
  );
}
