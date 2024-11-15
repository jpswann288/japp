import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { useUser } from "./context/UserContext";
import DashboardLayout from "./components/DashboardLayout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

const ProtectedRoute = ({ element }) => {
  const { user } = useUser();
  return user ? (
    <DashboardLayout>{element}</DashboardLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
