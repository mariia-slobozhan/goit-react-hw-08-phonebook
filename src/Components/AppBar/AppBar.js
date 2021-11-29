import { useSelector } from "react-redux";
import Navigation from "Components/Navigation/Navigation";
import AuthNav from "Components/AuthNav/AuthNav";
import UserMenu from "Components/UserMenu/UserMenu";
import authSelectors from "redux/auth/auth-selectors";
import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggesIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.container}>
      <Navigation />
      {isLoggesIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
