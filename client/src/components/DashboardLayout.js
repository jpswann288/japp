import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { useUser } from "../context/UserContext";
import AccountSignedIn from "./Account";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useUser();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Welcome, {user.email}
          </Typography>

          {/* Conditional Rendering of Login/Logout in top bar */}
          <AccountSignedIn user={user} logout={logout} />
        </Toolbar>
      </AppBar>

      <Container>{children}</Container>
    </div>
  );
};

export default DashboardLayout;
