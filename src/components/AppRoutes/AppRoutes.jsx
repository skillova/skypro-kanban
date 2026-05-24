import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignInPage from "../../pages/SignIn";
import SignUpPage from "../../pages/SignUp";
import MainPage from "../../pages/MainPage";
import QuitPage from "../../pages/LogoutPage";
import NotFoundPage from "../../pages/NotFound";
import PopBrowse from "../../components/PopBrowse/PopBrowse";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/popBrowse/:id" element={<PopBrowse />} />
          <Route
            path="/logout-confirm"
            element={<QuitPage setIsAuth={setIsAuth} />}
          />
        </Route>
      </Route>
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
