import type { JsonProps } from "../types/json";

export type CategoryProps = {
  data: JsonProps;
};

const catColor = {
  Reaction: "color-red-",
  Memory: "color-yellow-",
  Verbal: "color-green-",
  Visual: "color-blue-",
};

export default function Category({ data }: CategoryProps) {
  return (
    <div
      key={data.category}
      className={`category ${catColor[data.category] + "50"}`}
    >
      <img src={data.icon} alt={data.category} />
      <h3>{data.category}</h3>
      <p>
        <span>{data.score}</span> / 100
      </p>
    </div>
  );
}
