import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selectors";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  const onLogOut = () => dispatch(logOut());

  return (
    <div className={s.container}>
      <p>Welcome {userName}</p>
      <button type="button" onClick={onLogOut} className={s.button}>
        Log out
      </button>
    </div>
  );
}
