import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../components/provider/AuthProvider';
const PrivetRouteProfile = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className='h-screen w-full flex justify-center items-center'>
                <span className="text-green-950 loading loading-spinner loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login" state={location.pathname}></Navigate>
    );
};
PrivetRouteProfile.propTypes = {
    children: PropTypes.node
}
export default PrivetRouteProfile;