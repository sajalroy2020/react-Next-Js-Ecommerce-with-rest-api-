import { useForm } from 'react-hook-form';

export default function ContactFrom(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit (e){
        alert(e.email);
    }

    return(
        <>
            <section className="pb-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="text_color"><b>Have you any question?</b></h3>
                            <p className="footer-text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                            <form onSubmit={onSubmit= handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6 pt-4">
                                        <input {...register('name', {required:true})} className="contact_input" type="text" placeholder="Name" />
                                        {errors.name && errors.name.type == 'required' && <p className='error_text'>Enter the Name</p>}
                                    </div>
                                    <div className="col-md-6 pt-4">
                                        <input {...register('email', {required:true})} className="contact_input" type="text" placeholder="Email" />
                                        {errors.email && errors.email.type == 'required' && <p className='error_text'>Enter the Email</p>}

                                    </div>
                                    <div className="col-md-6 pt-4">
                                        <input {...register('phone', {required:true})} className="contact_input" type="text" placeholder="Phone" />
                                        {errors.phone && errors.phone.type == 'required' && <p className='error_text'>Enter the Phone Number</p>}
                                    </div>
                                    <div className="col-md-6 pt-4">
                                        <input {...register('subject', {required:true})} className="contact_input" type="text" placeholder="Subject" />
                                        {errors.subject && errors.subject.type == 'required' && <p className='error_text'>Enter the Subject</p>}
                                    </div>
                                    <div className="col-md-12 pt-4">
                                        <textarea {...register('massage', {required:true})} className="contact_input" placeholder="Message" name="" id="" cols="30" rows="10" />
                                        {errors.massage && errors.massage.type == 'required' && <p className='error_text'>Enter the Massage</p>}

                                        <button class="cart_btn mt-4"><b>Submit</b></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}