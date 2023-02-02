import Image from 'next/image'
import Link from 'next/link';

export default function NewsCard({ item }) {
    let { img, id, name, dec, read } = item;
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="card cart_product">
                    <div className="card-body">
                        <div className="d-flex justify-content-center cursor">
                            <Image src={img} width="250" height="250" alt='img' />
                        </div>
                        <div className="">
                            <a className='decoration_text' href=""><h4 className='text_color'><b>{name}</b></h4></a>
                            <div className="pt-3">
                                <span className='footer-text-2'><i className='fas fa-user'></i> Admin</span>
                                <span className='footer-text-2 ps-3'><i className='fas fa-calendar'></i> 27 December, 2019</span>
                            </div>
                            <p className='footer-text-2 pt-3'>{dec}</p>
                            <a className='decoration_text'><h6 className='text_color pb-3 news_text_hover py-4'><b>{read}</b> <i className='fa-solid fa-chevron-right main_color ps-1'></i></h6></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}