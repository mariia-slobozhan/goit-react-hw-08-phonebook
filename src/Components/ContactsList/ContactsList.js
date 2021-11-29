import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { filterValue } from "redux/contacts/contacts-selectors";
// import { useGetContactsQuery } from "redux/contacts/contactsSlice";
import ContactItem from "../ContactItem/ContactItem";
import { getVisiableContacts } from "redux/contacts/contacts-selectors";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  // const { data, error, isLoading } = useGetContactsQuery();
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
    <ul>
      {contacts.map((item) => (
        <ContactItem key={item.id} contact={item} />
      ))}

      {/* {error && <h2>There are not any contacts in your Phonebook</h2>}
      {isLoading && <h2>Loading...</h2>} */}
    </ul>
  );
}

ContactList.propTypes = {
  value: PropTypes.string,
  useGetContactsQuery: PropTypes.func,
};

// import React from "react";
// import ContactItem from "../ContactItem/ContactItem";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { filterValue } from "redux/contacts/contacts-selectors";
// import { getVisiableContacts } from "redux/contacts/contacts-selectors";

// export default function ContactList() {
//   return (
//     <ul>
//       <ContactItem />
//     </ul>
//   );
// }
