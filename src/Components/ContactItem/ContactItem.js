import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-operations";
// import { useDeleteContactMutation } from "redux/contacts/contactsSlice";
import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <li className={s.item} id={contact.id}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.tel}>{contact.phone}</span>
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

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteContact } from "redux/contacts/contacts-operations";
// import { getVisiableContacts } from "redux/contacts/contacts-selectors";
// import PropTypes from "prop-types";
// import s from "./ContactItem.module.css";

// export default function ContactItem() {
//   const items = useSelector(getVisiableContacts);
//   const dispatch = useDispatch();

//   const onDeleteContact = (id) => dispatch(deleteContact(id));

//   return items.map(({ name, phone, id }) => (
//     <li className={s.item} key={id} id={id}>
//       <span className={s.name}>{name}</span>
//       <span className={s.tel}>{phone}</span>
//       <button
//         className={s.button}
//         onClick={() => onDeleteContact(id)}
//         type="button"
//       >
//         Delete
//       </button>
//     </li>
//   ));
// }

// ContactItem.propTypes = {
//   items: PropTypes.array,
//   onDeleteContact: PropTypes.func,
// };
