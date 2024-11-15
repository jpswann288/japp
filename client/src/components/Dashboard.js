import * as React from "react";
import { PageContainer } from "@toolpad/core/PageContainer";
import { AppProvider } from "@toolpad/core/AppProvider";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Weather from "./Weather";

const NAVIGATION = [{ segment: "", title: "Dashboard" }];

export default function BasicPageContainer() {
  const theme = useTheme();

  return (
    <AppProvider navigation={NAVIGATION} theme={theme}>
      <Paper sx={{ width: "100%" }}>
        <PageContainer>
          <Weather />
        </PageContainer>
      </Paper>
    </AppProvider>
  );
}
