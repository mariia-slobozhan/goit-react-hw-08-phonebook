import { Spin } from "antd";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.container}>
      <Spin size="large" tip="Loading..." />
    </div>
  );
}
