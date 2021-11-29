import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PhonebookForm from "Components/PhonebookForm/PhonebookForm";
import ContactList from "Components/ContactsList/ContactsList";
import Filter from "Components/Filter/Filter";
import { fetchContacts } from "redux/contacts/contacts-operations";

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
