import { useContext } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import defaultUser from "../../assets/Default_User.jpg"

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="flex">
            <div className="w-[70%]">
                <img className="rounded-full w-8  sm:w-12" src={user?.photoURL ? user.photoURL : `${defaultUser}`} />
            </div>
            <div>
                {/* <h3>Name: {user?.displayName}</h3>
                <h3>Email: {user?.email}</h3> */}
                <h3>Name: Boro Baal</h3>
                <h3>Email: aslfjdsjkf@adjfjal.com</h3>
            </div>
        </div>
    );
};

export default Profile;