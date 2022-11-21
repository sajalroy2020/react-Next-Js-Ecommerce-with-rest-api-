import ProductCard from "../components/products/Product_Card";
import NestedLayout from "../components/layouts/Nested_Layout";

export default function Product(){
    return(
        <>
            <div className="about_bg">
                <div className="text-center about_text">
                    <p>FRESH AND ORGANIC</p>
                    <h1>New Product</h1>
                </div>
            </div>
            
            <section className="py-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="">

                    </div>
                    <ProductCard img="/all-img/product-img-1.jpg" name="Strawberry" kg="Per Kg" price="85$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                    <ProductCard img="/all-img/product-img-2.jpg" name="Berry" kg="Per Kg" price="70$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                    <ProductCard img="/all-img/product-img-3.jpg" name="Lemon" kg="Per Kg" price="35$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                    <ProductCard img="/all-img/product-img-1.jpg" name="Strawberry" kg="Per Kg" price="85$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                    <ProductCard img="/all-img/product-img-2.jpg" name="Berry" kg="Per Kg" price="70$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                    <ProductCard img="/all-img/product-img-3.jpg" name="Lemon" kg="Per Kg" price="35$" icon="fas fa-shopping-cart me-2" btnText="Add to Cart" />
                </div>
            </div>
        </section>
        </>
    )
}
Product.getLayout = NestedLayout;
