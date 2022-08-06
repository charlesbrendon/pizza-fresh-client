import ManageProducts from "assets/components/ManageProducts";
import ManageTables from "assets/components/ManageTables";
import ManageUsers from "assets/components/ManageUsers";
import Settings from "assets/pages/Settings";
import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";

const Router = () => {
    return (
      <Routes>
        <Route path={RoutePath.LOGIN} element={<Login />} />
        <Route path={RoutePath.HOME} element={<Home />} />
        <Route path={RoutePath.SETTINGS} element={<Settings />}>
          <Route path={RoutePath.SETTINGS_TABLES} element={<ManageTables />} />
          <Route
            path={RoutePath.SETTINGS_PRODUCTS}
            element={<ManageProducts />}
          />
          <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
        </Route>
      </Routes>
    );
  };
  
  export default Router;
