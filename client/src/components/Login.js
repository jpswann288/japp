import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useGoogleLogin } from "@react-oauth/google";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGoogleLogin } from "../redux/googleAuthSlice";

const providers = [{ id: "google", name: "Google" }];

export default function OAuthSignInPage() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { login } = useUser();
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await dispatch(fetchGoogleLogin(response.access_token));

        const userData = {
          email: res.payload.email,
          name: res.payload.name,
          picture: res.payload.picture,
          token: response.access_token,
        };

        // Save user data to context and localStorage
        login(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/dashboard");
      } catch (error) {
        console.error("Error fetching user info", error);
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  return (
    <AppProvider theme={theme}>
      <SignInPage signIn={googleLogin} providers={providers} />
    </AppProvider>
  );
}
