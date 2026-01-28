import Card from "../components/Card";
import Button from "../components/button";
import Input from "../components/Input";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState();

  return (
    <Card title="Welcome Back">
      <form className="login-form">
        <Input
          label="Email"
          type="email"
          name="email"
          error={errors.email}
          placeholder="Enter your Email"
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          error={errors.password}
          placeholder="Enter your Password"
          required
        />
        <Button type="submit" loading={loading}>
          Login
        </Button>
        <p className="äuth-link"> Don't have an account? Register here</p>
      </form>
    </Card>
  );
};
export default Login;
