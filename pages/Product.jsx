import Products from "../components/products/Product";
import { ssrAuthCheck } from "../middleware/authCheck";
// import { ccc } from '../components/layouts/Layout';

export default function Product() {

    return (
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
                            <Products />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Product.getInitialProps = async (ctx) => {
    await ssrAuthCheck(ctx, 'Product');
    return {};
}
