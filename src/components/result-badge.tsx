interface ResultBadgeProps {
  result: number;
}

export default function ResultBadge({ result }: ResultBadgeProps) {
  return (
    <div className="result-badge">
      <p className="result-badge__score">{result}</p>
      <p className="result-badge__text">of 100</p>
    </div>
  );
}
