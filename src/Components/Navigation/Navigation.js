import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import s from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link className={s.link} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className={s.link} to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
}
