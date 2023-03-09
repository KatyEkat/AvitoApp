import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protected-route';
import Home from './pages/home';
import NotFound from './pages/not-found';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  SIGNUP_ROUTE,
  ADV_ROUTE,
} from './utils/consts';
import Auth from './pages/auth';
import Profile from './pages/profile';
import AdvPage from './pages/adv/AdvPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={SIGNUP_ROUTE} element={<Auth />} />
      <Route path={LOGIN_ROUTE} element={<Auth />} />

      <Route path={`${PROFILE_ROUTE}/:id`} element={<Profile />} />
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
