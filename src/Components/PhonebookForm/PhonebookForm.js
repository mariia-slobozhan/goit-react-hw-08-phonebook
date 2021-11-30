import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Input, Button } from "antd";
import { getContacts } from "redux/contacts/contacts-selectors";
import { addContact } from "redux/contacts/contacts-operations";
import { toast } from "react-toastify";
import s from "./PhonebookForm.module.css";

export default function PhonebookForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedContact = name.toLowerCase();
    if (items.some((item) => item.name.toLowerCase() === normalizedContact)) {
      return toast.error(`${name} is already in contact list`);
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <section className={s.contaiter}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.input_contaiter}>
          <label className={s.label}>
            Name
            <Input
              className={s.input}
              placeholder="John Dou"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleChange}
              value={name}
            />
          </label>
          <label className={s.label}>
            {" "}
            Phone
            <Input
              className={s.input}
              type="tel"
              name="phone"
              placeholder="+38(096)000-00-00"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleChange}
              value={number}
            />
          </label>
        </div>
        <Button className={s.button} type="primary" htmlType="submit">
          Add contact
        </Button>
      </form>
    </section>
  );
}

PhonebookForm.propTypes = {
  addNewContact: PropTypes.func,
};
