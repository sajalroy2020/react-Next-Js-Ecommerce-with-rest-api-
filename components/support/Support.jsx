import SUpportCard from "./Support_card";

export default function Support(){
    return(
        <>
            <section className="pb-5 pt-4 support">
                <div className="container pb-5">
                    <div className="row">
                        <SUpportCard icon ="track_icon fas fa-shipping-fast" title="Free Shipping" subTitle="When order over $75" />
                        <SUpportCard icon ="icons fas fa-phone-volume" title="24/7 Support" subTitle="When order over $75" />
                        <SUpportCard icon ="icons fas fa-sync" title="Refund" subTitle="When order over $75" />
                    </div>
                </div>
            </section>
        </>
    )
}