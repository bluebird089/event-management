import { useContext } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import defaultUser from "../../assets/Default_User.jpg"
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast('Logged Out',
                    {
                        style: {
                            borderRadius: '30px',
                            background: 'red',
                            color: '#fff',
                        },
                    }
                );
            })
            .catch(() => { });
    }

    return (
        <div className="py-10 px-3 md:px-0 container md:w-[600px] mx-auto">
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-5">
                    <img className="rounded-full w-16 md:w-28" src={user?.photoURL ? user?.photoURL : `${defaultUser}`} />
                    <h3 className="text-xl md:text-4xl font-bold text-green-950">{user?.displayName}</h3>
                </div>
                <button onClick={handleSignOut} to='/login' className="btn btn-sm sm:btn-md bg-green-950 hover:bg-[#071a07] text-white font-semibold border-none rounded-full">Log Out</button>
            </div>
            <div className='h-[1px] w-full my-5 bg-green-950'></div>
            <div className="space-y-4">
                <h3 className="text-base md:text-2xl"><span className="font-bold text-green-950">User ID:</span> {user?.uid}</h3>
                <h3 className="text-base md:text-2xl"><span className="font-bold text-green-950">Name:</span> {user?.displayName}</h3>
                <h3 className="text-base md:text-2xl"><span className="font-bold text-green-950">Email:</span> {user?.email}</h3>
                <h3 className="text-base md:text-2xl"><span className="font-bold text-green-950">Joined From:</span> {user?.metadata.creationTime}</h3>
            </div>
        </div>
    );
};

export default Profile;