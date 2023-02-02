import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai'
import { useRouter } from 'next/router';
import Router from 'next/router';
import { useSelector } from 'react-redux'
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { authenticatedFalse, authenticatedTrue } from "../features/Auth/AuthSlice";
import { CgProfile } from 'react-icons/cg';
import { BsCart3 } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    const cartProduct = useSelector((state) => state.cart.cart);
    const authData = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    //Responsive Button Start
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // Sticky Nav Start
    const [color, setColor] = useState(false);
    const ChangeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', ChangeColor);
    }
    // Sticky Nav End

    //active nav-iteme start
    const router = useRouter();
    function isActive(route) {
        if (route == router.pathname) {
            return 'active1';
        }
        else ""
    }
    //active nav-iteme end

    const userLogOut = () => {
        Cookies.remove("token");
        dispatch(authenticatedFalse());
        showToastMessage();
        Router.replace("/");
    }

    function showToastMessage() {
        toast.success('Log out successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    // const checkAuthState = () => {
    //     try {
    //         const token = Cookies.get("token");
    //         if (token) {
    //             dispatch(authenticatedTrue());
    //         } else {
    //             dispatch(authenticatedFalse());
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     checkAuthState();
    // }, []);


    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/all-img/favicon.png" />
                <title>fruitkha</title>
            </Head>
            <div className="all_head">
                <div className={color ? 'head_bg' : false}>
                    <nav className="navbar navbar-expand-lg container px-2 px-md-0">
                        <div className="collapse navbar-collapse d-flex justify-content-between">
                            <Link href={'/'}>
                                <a className="navbar-brand">
                                    <Image src="/all-img/logo.png" width="180" height="50" alt='logo' />
                                </a>
                            </Link>
                            <button onClick={handleClick} className="navbar-toggler text-white">
                                {/* <span className="navbar-toggler-icon"></span> */}
                                {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                            </button>

                            <ul className="nav-list d-lg-flex mr-auto mt-2 mt-lg-0 d-none d-lg-block header_list">
                                <li className="nav-item">
                                    <Link href={'/'}><a className="nav-link" ><b className={isActive('/')}>Home</b></a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'/About'}><a className="nav-link" ><b className={isActive('/About')}>About</b></a></Link>
                                </li>
                                {authData.authenticated && (
                                    <>
                                        <li className="nav-item">
                                            <Link href={'/News_Main'}><a className="nav-link" ><b className={isActive('/News_Main')}>News</b></a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={'/Product'}><a className="nav-link" ><b className={isActive('/Product')}>Product</b></a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={'/Contect'}><a className="nav-link"><b className={isActive('/Contect')}>Contact</b></a></Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                            <div className='d-none d-lg-block'>
                                {
                                    authData.authenticated === false && (
                                        <>
                                            <Link href={'/Register'}><button className="btn_styling py-2 px-3 me-2">Register</button></Link>
                                            <Link href={'/Login'}><button className="btn_styling py-2 px-3">Login</button></Link>
                                        </>
                                    )}
                                {authData.authenticated && (
                                    <div>
                                        <Link href="/cart"><a className='py-2 px-3 border-0 h3 main_color position-relative'><BsCart3 />
                                            <span className='text-danger h6 position-absolute'>{cartProduct.length}</span>
                                        </a></Link>
                                        <Link href="/Profile"><a className='py-2 px-3 border-0 h3 main_color'><CgProfile /></a></Link>
                                        <button onClick={userLogOut} className="btn_styling py-2 px-3">Log Out</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={click ? ' active3' : 'nav3'}>
                            <ul className="nav-list text-center mt-4 pe-5">
                                <li className="nav-item">
                                    <Link href={'/'}><a className="nav-link"><b className={isActive('/')}>Home</b></a></Link>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <Link href={'/About'}><a className="nav-link"><b className={isActive('/About')}>About</b></a></Link>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <Link href={'/News_Main'}><a className="nav-link"><b className={isActive('/News_Main')}>News</b></a></Link>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <Link href={'/Product'}><a className="nav-link"><b className={isActive('/Product')}>Contect</b></a></Link>
                                </li>
                                <hr />
                                <li className="nav-item">
                                    <Link href={'/Contect'}><a className="nav-link"><b className={isActive('/Contect')}>Product</b></a></Link>
                                </li>
                                <hr />
                            </ul>
                            <div className='text-center py-2'>
                                <Link href={'/Login'}><button className="btn_styling py-2 px-3">Login</button></Link>
                                <Link href={'/Register'}><button className="btn_styling py-2 px-3 ms-2">Register</button></Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}


export default Header;