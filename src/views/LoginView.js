import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
