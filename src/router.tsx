import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.HOME} element={<Home />} />
        </Routes>
    );
}

export default Router;