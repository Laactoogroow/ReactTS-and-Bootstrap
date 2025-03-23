import { Input } from "../../components/Elements/Input/Input";
import { Label } from "../../components/Elements/Input/Label";
import Button from "../../components/Elements/Button";
import React, { useState } from "react";

type LoginFormProps = {
  children?: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ children }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    if (
      localStorage.getItem("email") === "rassyanizar22@gmail.com" &&
      localStorage.getItem("password") === "test"
    ) {
      window.location.href = "/dashboard";
    } else {
      alert("Email atau Password salah");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card p-4" style={{ width: "350px" }}>
        <h3 className="text-center">{children}</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <Label classname="form-label" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Label classname="form-label" htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button type="submit" classname="btn btn-primary w-100">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
