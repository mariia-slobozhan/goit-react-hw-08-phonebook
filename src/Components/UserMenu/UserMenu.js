import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selectors";
import { Button } from "antd";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  const onLogOut = () => dispatch(logOut());

  return (
    <div className={s.container}>
      <p className={s.label}>Welcome {userName}</p>
      <Button
        type="primary"
        htmlType="button"
        onClick={onLogOut}
        className={s.button}
      >
        Log out
      </Button>
    </div>
  );
}
