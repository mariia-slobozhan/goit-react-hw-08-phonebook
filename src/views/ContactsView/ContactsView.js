import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhonebookForm from "Components/PhonebookForm/PhonebookForm";
import ContactList from "Components/ContactsList/ContactsList";
import Filter from "Components/Filter/Filter";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { getContacts } from "redux/contacts/contacts-selectors";
import s from "./ContactsView.module.css";

export default function ContactsView() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const shouldRenderFilter = contactsList.length > 2;
  const shouldRenderList = contactsList.length !== 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={s.container}>
      <PhonebookForm />
      {shouldRenderFilter && <Filter />}
      {shouldRenderList && <ContactList />}
    </section>
  );
}
