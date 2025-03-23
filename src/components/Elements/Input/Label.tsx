import React from "react";

type LabelType = {
  classname?: string;
  htmlFor: string;
  children: React.ReactNode;
};

export const Label: React.FC<LabelType> = ({
  classname = "form-label",
  htmlFor,
  children,
}) => {
  return (
    <label className={classname} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
