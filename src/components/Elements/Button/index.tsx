import React from "react";

interface ButtonProps {
  classname?: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  classname = "btn btn-primary",
  type = "button",
  onClick,
  children,
}) => {
  return (
    <button className={classname} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
