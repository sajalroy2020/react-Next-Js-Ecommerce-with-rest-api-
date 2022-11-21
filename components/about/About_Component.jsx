import CompanyLogo from '../company_logos/Cmpany_Logos'
import MOnthlyDiscount from '../monthly_discounts/Monthly_Discount'
import SUpportCard from '../support/Support_card'

export default function AboutComponent(){
    return(
        
        <>
            <div className="about_bg">
                <div className="text-center about_text">
                    <p>WE SALE FRESH FRUITS</p>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <SUpportCard icon ="track_icon fas fa-shipping-fast" title="Free Shipping" subTitle="When order over $75" />
                    <SUpportCard icon ="icons fas fa-phone-volume" title="24/7 Support" subTitle="When order over $75" />
                    <SUpportCard icon ="icons fas fa-sync" title="Refund" subTitle="When order over $75" />
                </div>
            </div>
            <MOnthlyDiscount/>
            <CompanyLogo />
        </>
        
    )
}