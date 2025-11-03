import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {ROUTES} from "../../../constants/routes.ts";

export const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path={ROUTES.root} element={<MainPage />} />
        </Routes>
    );
};
