import Link from "next/link";
import { useForm } from 'react-hook-form';
import Cookies from "js-cookie";
import { login } from "../servises/action/authentication";
import { authenticatedTrue, authenticatedFalse } from "../features/Auth/AuthSlice";
import Router from 'next/router';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authPageRequireCheck } from "../middleware/authCheck";
import { useState } from "react";

export default function Login() {

    const [steps, setSteps] = useState(1);

    const router = useRouter();
    const { redirect } = router.query;
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (loginData) => {

    };


    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center w-100 h-100">
                <div className="col-lg-4">
                    <div className="card rounded my-5">
                        <div className="card-body bg_2">
                            <div className="text-center py-4 text-white">
                                <h3><b>Forgot Password</b></h3>
                                <p className='pt-2 text-light'>Put Your Email To Send Code.</p>
                            </div>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className='text-light mt-3' htmlFor="">E - mail:</label>
                                <input {...register('username', { required: true })} className="contact_input" type="text" placeholder="E - mail " />
                                {errors.username && errors.username.type == 'required' && <p className='error_text'>Enter the Email or Username</p>}

                                <div className="py-4">
                                    <button className="btn_styling py-3 w-100">Send</button>
                                </div>
                            </form>



                            <Link href={'/Register'}><p className='text-center text-white'>Not a Member? <a href='#' className='main_color'>SignUp Now</a></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

Login.getInitialProps = async (ctx) => {
    await authPageRequireCheck(ctx);
    return {};
};