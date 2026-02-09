import type { ReactNode, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button className="summary__button">{children}</button>;
}
