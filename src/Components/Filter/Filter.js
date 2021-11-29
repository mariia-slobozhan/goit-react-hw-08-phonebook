import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { filterValue } from "redux/contacts/contacts-selectors";
import { changeFilter } from "redux/contacts/contactsSlice";
// import { changeFilter } from "redux/contacts/contacts-actions";
import s from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(filterValue);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
