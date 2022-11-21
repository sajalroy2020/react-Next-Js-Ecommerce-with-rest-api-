// import Image from 'next/image'
import Video from "./video";

export default function FruitikaVideo(){
    return(
        <>
            <section className='py-5 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                           <div className="d-flex justify-content-center">
                                {/* <Image src='/all-img/product-img-3.jpg' width="400" height="400" alt='product' /> */}
                                <Video/>
                           </div>
                        </div>
                        <div className="col-md-6">
                            <p className="footer-text-2">Since Year 1999</p>
                            <h1 className="text_color"><b> We are <span className="main_color">Fruitkha</span> </b></h1>
                            <p className='footer-text-2 pt-3'>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                            <p className='footer-text-2 pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                            <button class="cart_btn mb-4">Know more</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}