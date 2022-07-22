import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import GlobalStyle from "../theme/GlobalStyle.styled";
import PhoneBookPage from "../pages/PhoneBook/PhoneBookPage";
import SingUpPage from "../pages/SingUp/SingUpPage";
import LoginPage from "../pages/Login/LoginPage";
import { refresh } from "../redux/user/userOperations";
import { Loader } from "../components/Loader/Loader";
import Home from "components/Home/Home";

const HomePage = lazy(() =>
  import(
    "../pages/HomePage/HomePage" /* webpackChunkName: "Home__page" */),
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
            <Route path="/" element={<HomePage />} >
              <Route index element={<Home />} />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <PhoneBookPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="signup"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <SingUpPage />
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
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
      </Suspense>
      
    </>
  );
}

export default App;
