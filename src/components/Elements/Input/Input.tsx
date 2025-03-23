import React from "react";

type InputType = {
  classname?: string;
  type: "text" | "email" | "password" | "file" | "date";
  id: string;
  name: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputType> = ({
  classname = "form-control",
  type = "text",
  id,
  name,
  placeholder,
  onChange
}) => {
  return (
    <input
      className={classname}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
