import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-operations";
// import { useDeleteContactMutation } from "redux/contacts/contactsSlice";
import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <li className={s.item} id={contact.id}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.tel}>{contact.number}</span>
      <button
        className={s.button}
        onClick={() => onDeleteContact(contact.id)}
        type="button"
      >
        Delete
        {/* {isDeleting ? "Deleting..." : "Delete"} */}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
};
