import "./App.css";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
// import { fetchContacts } from "redux/contacts/contacts-operations";
import AppBar from "./Components/AppBar/AppBar";
import ContactsView from "views/ContactsView";
import HomeView from "views/HomeView";
import LoginView from "views/LoginView";
import RegisterView from "views/RegisterView";

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <AppBar />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Routes>
      </main>
    </>
  );
}
