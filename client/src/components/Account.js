import * as React from "react";
import {
  AuthenticationContext,
  SessionContext,
} from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";

export default function AccountSignedIn({ user, logout }) {
  const userSession = {
    user: {
      name: user.name,
      email: user.email,
      image: user.picture,
    },
  };
  const [session, setSession] = React.useState(userSession);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(session);
      },
      signOut: () => {
        setSession(null);
        logout();
      },
    };
  }, [session, logout]);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        {/* preview-start */}
        <Account />
        {/* preview-end */}
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
