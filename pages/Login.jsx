import Image from 'next/image'
import Link from "next/link";
import { useForm } from 'react-hook-form';

export default function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit (e){
        alert(e.email);
    }


    return(
        <>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center w-100 h-100">
                    <div className="col-lg-4">
                        <div className="card rounded my-5">
                            <div className="card-body bg_2">
                                <div className="text-center py-4">
                                    <Image src="/all-img/logo.png" width="180" height="50" alt='logo' />
                                </div>
                                <form onSubmit={onSubmit= handleSubmit(onSubmit)}>
                                    <label className='text-light mt-3' htmlFor="">Email or Phone:</label>
                                    <input {...register('email', {required:true})} className="contact_input" type="text" placeholder="Email or phone" />
                                    {errors.email && errors.email.type == 'required' && <p className='error_text'>Enter the Email or Number</p>}

                                    <label className='text-light mt-3' htmlFor="">Password:</label>
                                    <input {...register('password', {required:true, minLength:6})} className="contact_input" type="password" placeholder="Password" />
                                    {errors.password && errors.password.type == 'required' && <p className='error_text'>Enter the password</p>}
                                    {errors.password && errors.password.type === 'minLength' && <p className='error_text'>Plase enter minimam 6 carecter</p>}

                                    <div className="mt-2">
                                        <a className='main_color decoration_text' href="#">Forgot Password ?</a>
                                    </div>
                                    <div className="py-5">
                                        <button className="btn_styling py-2 w-100">Login</button>
                                    </div>
                                </form>
                                <Link href={'/Register'}><p className='text-center text-white'>Not a Member? <a href='#' className='main_color'>SignUp Now</a></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

