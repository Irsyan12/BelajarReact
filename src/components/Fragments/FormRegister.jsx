import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormRegister = (props) => {
  const handleRegister = () => {
    console.log("register");
  }
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Input your full name"
        name="name"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="****"
        name="confirmPassword"
      />

      <Button classname="bg-blue-600 w-full" onClick={handleRegister}>Register</Button>
    </form>
  );
};

export default FormRegister;
