import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ProfileDetail from "../pages/ProfileDetail";
import Attendance from "../pages/Attendance";
import Tasks from "../pages/Tasks";

import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/layout/Layout";

const AppRoutes = () => {
  const isAuth = useSelector(
    (state) => state.auth.isAuthenticated
  );

  return (
    <Routes>
      {/* Root */}
      <Route
        path="/"
        element={
          isAuth ? (
            <Navigate to="/dashboard" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="/login" element={<Login />} />

      {/* Protected Layout */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* ADMIN only */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/attendance"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <Attendance />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <Tasks />
            </ProtectedRoute>
          }
        />
<Route
  path="/profile"
  element={
    <ProtectedRoute roles={["ADMIN"]}>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile/:id"
  element={
    <ProtectedRoute>
      <ProfileDetail />
    </ProtectedRoute>
  }
/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
