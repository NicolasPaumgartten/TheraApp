import { useContext } from "react";
import RoutesOpen from "./routesOpen.js";
import RoutesPrivate from "./routesPrivate.js";
import { AuthContext } from "../context/auth.js";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return user && user.id_user ? <RoutesPrivate /> : <RoutesOpen />;
}

