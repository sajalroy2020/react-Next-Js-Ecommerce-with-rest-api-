import { CiPaperplane } from 'react-icons/ci';


const Footer = () => {
    return (
        <>
            <footer className="bg_2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-white">
                            <h3 className="footer-text">About us</h3>
                            <div className="footer-under my-4"></div>
                            <p className="footer-text-2">Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                        </div>
                        <div className="col-md-3 text-white pt-5 pt-md-0">
                            <h3 className="footer-text">Get in Touch</h3>
                            <div className="footer-under my-4"></div>
                            <p className="footer-text-2">34/8, East Hukupara, Gifirtok, Sadan.</p>
                            <p className="footer-text-2">support@fruitkha.com</p>
                            <p className="footer-text-2">+ 00 111 222 3333</p>
                        </div>
                        <div className="col-md-3 text-white pt-5 pt-md-0">
                            <h3 className="footer-text">Pages</h3>
                            <div className="footer-under my-4"></div>
                            <a className="footer-item" href=""><p className="footer-text-2"> <i class="fa-solid fa-chevron-right h6 main_color pe-2"></i> Home</p></a>
                            <a className="footer-item" href=""><p className="footer-text-2"> <i class="fa-solid fa-chevron-right h6 main_color pe-2"></i> About</p></a>
                            <a className="footer-item" href=""><p className="footer-text-2"> <i class="fa-solid fa-chevron-right h6 main_color pe-2"></i> Product</p></a>
                            <a className="footer-item" href=""><p className="footer-text-2"> <i class="fa-solid fa-chevron-right h6 main_color pe-2"></i> News</p></a>
                            <a className="footer-item" href=""><p className="footer-text-2"> <i class="fa-solid fa-chevron-right h6 main_color pe-2"></i> Contact</p></a>
                        </div>
                        <div className="col-md-3 text-white pt-5 pt-md-0">
                            <h3 className="footer-text">Subscribe</h3>
                            <div className="footer-under my-4"></div>
                            <p className="footer-text-2">Subscribe to our mailing list to get the latest updates.</p>
                            <div className="">
                                <input className="footer_input" type="text" placeholder="Email" />
                                <button className="footer_input_btn ms-1"><CiPaperplane /></button>
                            </div>
                            <div className="social_icon pt-4">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;