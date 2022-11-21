import Image from 'next/image'

export default function MOnthlyDiscount(){
    return(
        <>
            <section className='position-relative mt-5 monthly_bg'>
                <div className="container">
                    <div className=" py-5">
                        <h2 className='monthly_dis_text_1 text-white'>December sale is on! <br /> with big <span className='main_color'> Discount...</span></h2>
                        <div className="d-flex align-items-center py-2">
                            <h4 className='discount_text text-white'>Sale! <br /> Upto </h4>
                            <h3 className='main_color monthly_percent'>50%</h3>
                            <h4 className='discount_text text-white'> off </h4>
                        </div>
                        <button class="cart_btn mb-4">Shop now</button>
                    </div>
                </div>
            </section>
        </>
    )
}
