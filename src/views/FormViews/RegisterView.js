import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { register } from "redux/auth/auth-operations";
import s from "./FormViews.module.css";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "userName":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <h1 className={s.title}>Registration</h1>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            type="text"
            name="userName"
            value={name}
            required
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            type="text"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}
