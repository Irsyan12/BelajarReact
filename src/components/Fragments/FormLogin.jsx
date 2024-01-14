import InputForm from "../Elements/input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = (props) => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("username", event.target.username.value)
    // localStorage.setItem("password", event.target.password.value)
    // console.log("login")
    // window.location.href = "/products"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="username"
        placeholder="john doe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      {loginFailed && <p className="text-red-500 text-center mb-3">{loginFailed}</p>}

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
