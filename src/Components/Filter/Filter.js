import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { filterValue } from "redux/contacts/contacts-selectors";
import { changeFilter } from "redux/contacts/contacts-slice";
import s from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(filterValue);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <Input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
