import Category from "./category";
import Button from "./button";
import type { JsonProps } from "../types/json";

interface SummaryProps {
  data: JsonProps[];
}

export default function Summary({ data }: SummaryProps) {
  return (
    <div className="summary">
      <h2 className="summary__header">Summary</h2>
      <div className="summary__content">
        {data.map((cat) => (
          <Category data={cat} />
        ))}
        <Button>Continue</Button>
      </div>
    </div>
  );
}
