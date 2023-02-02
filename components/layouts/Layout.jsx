import { useEffect, useState } from "react"
import Footer from "../Footer"
import Header from "../Header"
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { authenticatedTrue, authenticatedFalse, setUser } from "../../features/Auth/AuthSlice";
import { useSelector } from 'react-redux';
import { getProfileByToken } from '../../servises/action/authentication'


const Layout = ({ children }) => {

    const dispatch = useDispatch();
    const authenticated = useSelector((state) => state.auth.authenticated);
    // const user = useSelector((state) => state.auth.user);

    const checkAuthState = () => {
        try {
            const token = Cookies.get("token");
            if (token) {
                dispatch(authenticatedTrue());
            } else {
                dispatch(authenticatedFalse());
            }
        } catch (error) {
            console.log(error);
        }
    };

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
        checkAuthState();
        if (authenticated) {
            getProfileByTokenAction();
        };
    }, [authenticated]);


    return (
        <>
            <Header /> {children} <Footer />
        </>
    )
};

export default Layout;