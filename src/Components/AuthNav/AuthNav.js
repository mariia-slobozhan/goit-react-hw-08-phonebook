import { Link } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.container}>
      <Link className={s.link} to="/login">
        Log In
      </Link>

      <Link className={s.link} to="/register">
        Sign Up
      </Link>
    </div>
  );
}
