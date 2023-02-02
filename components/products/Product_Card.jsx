import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ items }) {
    return (
        <>
            <Link href={`/details/${items.id}`}>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card cart_product">
                        <div className="card-body">
                            <div className="d-flex justify-content-center cursor">
                                <img src={items.image} width="250" height="250" alt='img' />
                            </div>
                            <div className="text-center">
                                <h4 className='text_color'><b>{items.title}</b></h4>
                                <div className="d-flex justify-content-center w-100 gap-3">
                                    <h1 className='text_color pb-3'><b>{items.sale_price}$</b></h1>
                                    <h4><s>{items.price_off}$</s></h4>
                                </div>
                                <button className='cart_btn mb-4'><i className="fas fa-shopping-cart me-2"></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}