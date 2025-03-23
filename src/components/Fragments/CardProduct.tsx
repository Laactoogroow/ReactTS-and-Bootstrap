import React from "react";
import Button from "../Elements/Button";

interface CardProductProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
  alt?: string;
}

interface BodyProps {
  name: string;
  children: React.ReactNode;
}

interface FooterProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const CardProduct: React.FC<CardProductProps> & {
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
} = ({ children }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<HeaderProps> = ({ image, alt }) => {
  return <img src={image} alt={alt} className="card-img-top" />;
};

const CardBody: React.FC<BodyProps> = ({ name, children }) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{children}</p>
    </div>
  );
};

const CardFooter: React.FC<FooterProps> = ({ onClick, children }) => {
  return <Button type="button" onClick={onClick}>{children}</Button>;
};

CardProduct.Header = CardHeader;
CardProduct.Body = CardBody;
CardProduct.Footer = CardFooter;
export default CardProduct;
