import Image from "next/image";
import Link from "next/link";
import { useForm } from 'react-hook-form';

export default function Register(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit (e){
        alert(e.email);
    }

    return(
        <>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center w-100 h-100">
                    <div className="col-lg-5">
                        <div className="card rounded my-1">
                            <div className="card-body bg_2">
                                <div className="text-center py-4">
                                    <Image src="/all-img/logo.png" width="180" height="50" alt='logo' />
                                </div>
                                <form onSubmit={onSubmit= handleSubmit(onSubmit)}>
                                    <label className='text-light mt-3' htmlFor="">First Name:</label>
                                    <input {...register('firstName', {required:true})} className="contact_input " type="text" placeholder="First Name" />
                                    {errors.firstName && errors.firstName.type == 'required' && <p className='error_text'>Enter the First Name</p>}

                                    <label className='text-light mt-3' htmlFor="">Last Name:</label>
                                    <input {...register('lastName', {required:true})} className="contact_input" type="text" placeholder="Last Name" />
                                    {errors.lastName && errors.lastName.type == 'required' && <p className='error_text'>Enter the Last Name</p>}


                                    <label className='text-light mt-3' htmlFor="">Email:</label>
                                    <input {...register('email', {required:true})} className="contact_input" type="email" placeholder="Email" />
                                    {errors.email && errors.email.type == 'required' && <p className='error_text'>Enter the Email</p>}


                                    <label className='text-light mt-3' htmlFor="">Password:</label>
                                    <input {...register('password', {required:true, minLength:6, maxLength:10})} className="contact_input" type="password" placeholder="Password" />
                                    {errors.password && errors.password.type == 'required' && <p className='error_text'>Enter the password</p>}
                                    {errors.password && errors.password.type === 'minLength' && <p className='error_text'>Plase enter minimam 6 carecter</p>}
                                    {errors.password && errors.password.type === 'maxLength' && <p className='error_text'> password cannot exced more than 10 carecter</p>}

                                    <div className="py-5">
                                        <button className="btn_styling py-2 w-100">Register</button>
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
}