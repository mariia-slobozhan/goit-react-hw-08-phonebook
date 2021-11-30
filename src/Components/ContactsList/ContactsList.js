import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { filterValue } from "redux/contacts/contacts-selectors";
import ContactItem from "../ContactItem/ContactItem";
import { getVisiableContacts } from "redux/contacts/contacts-selectors";
import s from "./ContactsList.module.css";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const value = useSelector(filterValue);
  const items = useSelector(getVisiableContacts);

  useEffect(() => {
    const normalizedFilter = value.toLowerCase();
    try {
      setContacts(
        items.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        )
      );
    } catch (error) {
      return error;
    }
  }, [items, value]);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map((item) => (
          <ContactItem key={item.id} contact={item} />
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  value: PropTypes.string,
  useGetContactsQuery: PropTypes.func,
};
