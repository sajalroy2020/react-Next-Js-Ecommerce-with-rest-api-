import NewsCard from "./News_Card";
import NewsData from "./News_Data";

export default function News(){

    return(
        <section className="py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h1 className="text_color"><b><span className="main_color">Our</span> News</b></h1>
                        <div className="product_under"></div>
                        <p className="footer-text-2 pt-4 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas <br /> itaque eveniet beatae optio.</p>
                    </div>


                    {NewsData.map((item) => (
                            <NewsCard key={item.id} item={item}/>
                    ))}


                </div>
            </div>
        </section>
    )
}