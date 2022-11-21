import Image from 'next/image'

export default function DiscountProduct(){
    return(
        <>
            <section className='discount_bg py-5 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="position-relative d-flex justify-content-center">
                                <Image src='/all-img/product-img-6.jpg' width="400" height="400" alt='product' />
                                <div className="price_box">
                                    <div className="inner_price">
                                        <span className="price">
                                            <strong>30%</strong> <br /> off per kg
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1 className="text_color"><b><span className="main_color">Deal</span> of the month</b></h1>
                            <h4 className='discount_text text_color pt-2 pb-3'>HIKAN STRWABERRY</h4>
                            <p className='footer-text-2'>Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</p>
                            <div className="d-flex pt-2 pb-5">
                                <div className="descount_time">
                                    <strong className='main_color'>00</strong> <br /> Days
                                </div>
                                <div className="descount_time ms-3">
                                    <strong className='main_color'>00</strong> <br /> Hours
                                </div>
                                <div className="descount_time ms-3">
                                    <strong className='main_color'>00</strong> <br /> Mins
                                </div>
                            </div>
                            <button class="cart_btn mb-4"><i class="fas fa-shopping-cart me-2"></i> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}