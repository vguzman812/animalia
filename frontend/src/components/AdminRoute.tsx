import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
    interface RootState {
        auth: {
            // TODO: Fix this
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            userInfo: any; // Replace 'any' with the actual type of userInfo. I am too lazy for this rn.
        };
    }
    // Getting the logged-in user's info from Redux store
    const { userInfo } = useSelector((state: RootState) => state.auth);
    return userInfo?.isAdmin ? (
        <Outlet />
    ) : (
        <Navigate
            to="/login"
            replace
        />
    );
};

export default AdminRoute;
