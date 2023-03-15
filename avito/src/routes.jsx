import React from "react";
import { Route, Routes } from "react-router-dom";
import AdvPage from "./pages/adv";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import ProfileSeller from "./pages/profileSeller"
import ProfilePersonal from "./pages/profilePersonal"
import Registration from "./pages/registration";
import {
  ADV_ROUTE, HOME_ROUTE,
  LOGIN_ROUTE, PROFILE_PERSONAL_ROUTE, PROFILE_ROUTE,
  SIGNUP_ROUTE
} from "./utils/consts";

function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={SIGNUP_ROUTE} element={<Registration />} />
      <Route path={LOGIN_ROUTE} element={<Login />} />
      

      <Route path={`${PROFILE_ROUTE}/:id`} element={<ProfileSeller />} />
      <Route path={PROFILE_PERSONAL_ROUTE} element={<ProfilePersonal />} />

      <Route path={`${ADV_ROUTE}/:id`} element={<AdvPage />} />

      {/* <Route
        element={
          <ProtectedRoute>
            <Route path={PROFILE_ROUTE} element={<Profile />} />
          </ProtectedRoute>
        }
      /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
