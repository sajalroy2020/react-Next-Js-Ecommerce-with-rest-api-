import Image from "next/image";

export default function CompanyLogo(){
    return(
        <>
            <section className="discount_bg py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-3  d-flex justify-content-center">
                           <Image src='/all-img/company-logos/1.png' width="150" height="100" alt='logo' />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-3  d-flex justify-content-center">
                           <Image src='/all-img/company-logos/2.png' width="150" height="100" alt='logo' />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-3 pt-4 pt-lg-0 d-flex justify-content-center">
                           <Image src='/all-img/company-logos/3.png' width="150" height="100" alt='logo' />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-3 pt-4 pt-lg-0 d-flex justify-content-center">
                           <Image src='/all-img/company-logos/4.png' width="150" height="100" alt='logo' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}