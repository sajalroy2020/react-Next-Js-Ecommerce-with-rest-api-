import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { signup } from "../servises/action/authentication";
import { authenticatedTrue, authenticatedFalse } from "../features/Auth/AuthSlice";
import Router from 'next/router';
import { authPageRequireCheck } from "../middleware/authCheck";

export default function Register() {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (regData) => {
        try {
            const { data } = await signup(regData);

            Cookies.set("token", data.data.json_object.token);
            dispatch(authenticatedTrue());
            Router.replace('/');
        } catch (error) {
            console.log(error, 'Registration error');
            dispatch(authenticatedFalse());
        };
    };


    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center w-100 h-100">
                    <div className="col-lg-5">
                        <div className="card rounded my-1">
                            <div className="card-body bg_2">
                                <div className="text-center py-4">
                                    <Link href={'/'}>
                                        <a>
                                            <Image src="/all-img/logo.png" width="180" height="50" alt='logo' />
                                        </a>
                                    </Link>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className='text-light mt-3' htmlFor="">Name:</label>
                                    <input {...register('name', { required: true })} className="contact_input " type="text" placeholder="Name" />
                                    {errors.name && errors.name.type == 'required' && <p className='error_text'>Enter the Name</p>}

                                    <label className='text-light mt-3' htmlFor="">User Name:</label>
                                    <input {...register('username', { required: true })} className="contact_input" type="text" placeholder="User Name" />
                                    {errors.username && errors.username.type == 'required' && <p className='error_text'>Enter the User Name</p>}


                                    <label className='text-light mt-3' htmlFor="">Email:</label>
                                    <input {...register('email', { required: true })} className="contact_input" type="email" placeholder="Email" />
                                    {errors.email && errors.email.type == 'required' && <p className='error_text'>Enter the Email</p>}


                                    <label className='text-light mt-3' htmlFor="">Password:</label>
                                    <input {...register('password', { required: true })} className="contact_input" type="password" placeholder="Password" />
                                    {errors.password && errors.password.type == 'required' && <p className='error_text'>Enter the password</p>}
                                    {/* {errors.password && errors.password.type === 'minLength' && <p className='error_text'>Plase enter minimam 6 carecter</p>} */}
                                    {/* {errors.password && errors.password.type === 'maxLength' && <p className='error_text'> password cannot exced more than 10 carecter</p>} */}

                                    <label className='text-light mt-3' htmlFor="">Confirm Password:</label>
                                    <input {...register('password_confirmation', { required: true })} className="contact_input" type="password" placeholder="Confirm Password" />
                                    {errors.password_confirmation && errors.password_confirmation.type == 'required' && <p className='error_text'>Enter the Confirm Password</p>}

                                    <label className='text-light mt-3'>Phone</label>
                                    <input type='number' className="contact_input" placeholder="phone" name='phone' {...register('phone', { required: true })} />
                                    <p className='error_text'>{errors.phone && <span>Enter the phone number</span>}</p>

                                    <div className="py-4">
                                        <button className="btn_styling py-3 w-100">Register</button>
                                    </div>
                                </form>
                                <Link href={'/Login'}><p className='text-center text-white'>Already Reagister? <a href='#' className='main_color'>Login Now</a></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


Register.getInitialProps = async (ctx) => {
    await authPageRequireCheck(ctx);
    return {};
};