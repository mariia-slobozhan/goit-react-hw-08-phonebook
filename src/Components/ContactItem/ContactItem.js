import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-operations";
import { Button } from "antd";
import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <li className={s.item} id={contact.id}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.tel}>{contact.number}</span>
      <Button
        className={s.button}
        onClick={() => onDeleteContact(contact.id)}
        type="primary"
        htmlType="button"
      >
        Delete
        {/* {isDeleting ? "Deleting..." : "Delete"} */}
      </Button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
};
