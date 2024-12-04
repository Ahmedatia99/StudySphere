import { HTMLAttributes } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./colored.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  action?: React.ReactNode; // Supports either a string or a React component
  displays?: "true" | "false";
  paddingname?: string;
  path: string;
}
export const Button = ({
  action,
  variant = "primary",
  paddingname,
  path,
}: ButtonProps) => {
  const variants = {
    primary: " colored text-white",
    second: "bg-lighting text-textcook ",
    greedy: "bg-lighting text-textcook",
  }[variant];

  return (
    <button
      className={classNames(
        `flex items-center justify-center rounded-lg transition-all text-sm font-medium mr-3`,
        variants,
        paddingname
      )}
    >
      <Link className="!p-0" to={path}>
        {action}{" "}
      </Link>
    </button>
  );
};
