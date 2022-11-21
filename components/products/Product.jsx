import ProductCard from "./Product_Card";

export default function Product(){
    return(
        <section className="py-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h1 className="text_color"><b><span className="main_color">Our</span> Products</b></h1>
                        <div className="product_under"></div>
                        <p className="footer-text-2 pt-4 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas <br /> itaque eveniet beatae optio.</p>
                    </div>
                    <ProductCard img="/all-img/product-img-1.jpg" name="Strawberry" kg="Per Kg" price="85$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                    <ProductCard img="/all-img/product-img-2.jpg" name="Berry" kg="Per Kg" price="70$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                    <ProductCard img="/all-img/product-img-3.jpg" name="Lemon" kg="Per Kg" price="35$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                </div>
            </div>
        </section>
    )
}