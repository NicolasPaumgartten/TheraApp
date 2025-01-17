import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthProvider, AuthContext };
