import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { fetchCurrentUser } from "redux/auth/auth-operations";
import authSelectors from "redux/auth/auth-selectors";
import PrivateRoute from "Components/Routes/PrivateRoute";
import PublicRoute from "Components/Routes/PublicRoute";
import AppBar from "./Components/AppBar/AppBar";
import Loader from "Components/Loader/Loader";
const HomeView = lazy(() =>
  import("views/HomeView/HomeView.js")
); /* webpackChunkName: "home-view" */
const LoginView = lazy(() =>
  import("views/FormViews/LoginView.js")
); /* webpackChunkName: "login-view" */
const RegisterView = lazy(() =>
  import("views/FormViews/RegisterView.js")
); /* webpackChunkName: "register-view" */
const ContactsView = lazy(() =>
  import("views/ContactsView/ContactsView.js")
); /* webpackChunkName: "contacts-view" */

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <AppBar />
      <main>
        {isFetchingCurrent ? (
          <Loader />
        ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<PublicRoute component={HomeView} />} />
              <Route
                path="/login"
                element={<PublicRoute restricted component={LoginView} />}
              />
              <Route
                path="/register"
                element={<PublicRoute restricted component={RegisterView} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute component={ContactsView} />}
              />
            </Routes>
          </Suspense>
        )}
      </main>
    </>
  );
}
