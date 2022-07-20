import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import GlobalStyle from "../theme/GlobalStyle.styled";
import PhoneBookPage from "../pages/PhoneBookPage";
import RegisterPage from "../pages/SingUp/SingUpPage";
import LoginPage from "../pages/Login/LoginPage";
import { refresh } from "../redux/user/userOperations";
import { Loader } from "../components/Loader/Loader";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "Home__page" */),
);
const PublicRoute = lazy(() =>
  import(
    "../components/PublicRoute/PublicRoute" /* webpackChunkName: "Public__Route" */
  ),
);
const PrivateRoute = lazy(() =>
  import(
    "../components/PrivateRoute/PrivateRoute" /* webpackChunkName: "Private__Route" */
  ),
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            >
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <PhoneBookPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>
          </Routes>
        </Suspense>
    </>
  );
}

export default App;
