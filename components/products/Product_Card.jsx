import Image from 'next/image'

export default function ProductCard({img, name, kg, price, icon, btnText}){
    return(
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card cart_product">
                    <div className="card-body">
                        <div className="d-flex justify-content-center cursor">
                            <Image src={img} width="250" height="250" alt='img' />
                        </div>    
                        <div className="text-center">
                            <h4 className='text_color'><b>{name}</b></h4>
                            <p className='footer-text-2 pt-3'>{kg}</p>
                            <h1 className='text_color pb-3'><b>{price}</b></h1>
                            <button className='cart_btn mb-4'><i className={icon}></i> {btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}