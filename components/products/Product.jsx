import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./Product_Card";
import { getProductStart, getProductSuccess, getProductError } from "../../features/Auth/ProductsSlice";
import { getProducts } from "../../servises/action/products";
import { useEffect } from "react";

export default function Product() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products.products);

    const getProductAction = async (cat_id) => {
        dispatch(getProductStart());
        try {
            const { data } = await getProducts(cat_id);
            dispatch(getProductSuccess(data.data.json_object));
        } catch (error) {
            dispatch(getProductError(error));
        }
    };

    useEffect(() => {
        getProductAction(1);
    }, []);

    return (
        <section className="">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h1 className="text_color"><b><span className="main_color">Our</span> Products</b></h1>
                        <div className="product_under"></div>
                        <p className="footer-text-2 pt-4 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas <br /> itaque eveniet beatae optio.</p>
                    </div>

                    {products && products.map((items) => (
                        <ProductCard key={items.id} items={items} />
                    ))}

                </div>
            </div>
        </section>
    )
}