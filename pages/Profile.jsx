import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setUser } from "../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
import { ssrAuthCheck } from "../middleware/authCheck";
import { getProfileByToken } from "../servises/action/authentication";
import ReactLoading from 'react-loading';

const Profile = () => {

    const authenticated = useSelector((state) => state.auth.authenticated);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const getProfileByTokenAction = async () => {
        try {
            const { data } = await getProfileByToken();
            dispatch(setUser(data.data.json_object));
        }
        catch (error) {
            console.log(error, 'errorerrorerrorerror profile');
        }
    };

    useEffect(() => {
        if (authenticated) {
            getProfileByTokenAction();
        };


    }, []);


    return (
        <div>
            <div className="about_bg">
                <div className="text-center about_text">
                    <p>WE SALE FRESH FRUITS</p>
                    <h1>My Profile</h1>
                </div>
            </div>

            {/* <ReactLoading type={prop} color="#000" /> */}

            {user ?
                <div className="container pb-5 text-center">
                    {user.avatar ?
                        <img src={user.avatar} width="200" height="200" className='rounded-circle mb-3' alt='logo' />
                        : null
                    }
                    <h5><b>Name: </b>{user.name}</h5>
                    <h5><b>User Name: </b>{user.username}</h5>
                    <h5><b>Email: </b>{user.email}</h5>
                    <h5><b>Phone: </b>{user.phone}</h5>
                </div>
                : null
            }
        </div>
    )
}

Profile.getInitialProps = async (ctx) => {
    await ssrAuthCheck(ctx, 'Profile');
    return {};
};

export default Profile;