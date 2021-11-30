import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { logIn } from "redux/auth/auth-operations";
// import authSelectors from 'redux/auth/auth-selectors'
import s from "./FormViews.module.css";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const onFinish = () => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={s.container}>
      <Form
        // onSubmit={handleSubmit}
        autoComplete="off"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1 className={s.title}>Log In</h1>
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
          Log In
        </Button>
      </Form>
    </div>
  );
}
