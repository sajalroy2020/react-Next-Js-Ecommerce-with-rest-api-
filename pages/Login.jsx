import Image from 'next/image'
import Link from "next/link";
import { useForm } from 'react-hook-form';
import Cookies from "js-cookie";
import { login } from "../servises/action/authentication";
import { authenticatedTrue, authenticatedFalse } from "../features/Auth/AuthSlice";
import Router from 'next/router';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authPageRequireCheck } from "../middleware/authCheck";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

    const router = useRouter();
    const { redirect } = router.query;
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (loginData) => {
        try {
            const { data } = await login(loginData);

            Cookies.set("token", data.data.json_object.token);
            dispatch(authenticatedTrue());
            showToastMessage();
            if (redirect) {
                Router.replace(redirect);
            } else {
                Router.replace("/");
            }
        } catch (error) {
            console.log(error, 'Login error');
            dispatch(authenticatedFalse());
        };
    };



    function showToastMessage() {
        toast.success('Logged in successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center w-100 h-100">
                <div className="col-lg-4">
                    <div className="card rounded my-5">
                        <div className="card-body bg_2">
                            <div className="text-center py-4">
                                <Link href={'/'}>
                                    <a>
                                        <Image src="/all-img/logo.png" width="180" height="50" alt='logo' />
                                    </a>
                                </Link>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className='text-light mt-3' htmlFor="">Email or Username:</label>
                                <input {...register('username', { required: true })} className="contact_input" type="text" placeholder="Email or Username " />
                                {errors.username && errors.username.type == 'required' && <p className='error_text'>Enter the Email or Username</p>}

                                <label className='text-light mt-3' htmlFor="">Password:</label>
                                <input {...register('password', { required: true })} className="contact_input" type="password" placeholder="Password" />
                                {errors.password && errors.password.type == 'required' && <p className='error_text'>Enter the password</p>}

                                <div className="mt-2">
                                    <Link href={'/forgot-password'}><a className='main_color decoration_text'>Forgot Password ?</a></Link>
                                </div>
                                <div className="py-4">
                                    <button className="btn_styling py-3 w-100">Login</button>
                                </div>
                            </form>
                            <Link href={'/Register'}><p className='text-center text-white'>Not a Member? <a href='#' className='main_color'>SignUp Now</a></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.getInitialProps = async (ctx) => {
    await authPageRequireCheck(ctx);
    return {};
};