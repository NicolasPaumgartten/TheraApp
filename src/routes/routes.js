import { useContext } from "react";
import RoutesOpen from "./routesOpen.js";
import RoutesPrivate from "./routesPrivate.js";
import {AuthContext} from "../context/auth.js";

function Routes() {

  const {user} = useContext(AuthContext);


  return user.id_user ? <RoutesPrivate/> : <RoutesOpen/>

}

export default Routes;
