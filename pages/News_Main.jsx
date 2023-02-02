import CompanyLogo from "../components/company_logos/Cmpany_Logos";
import NestedLayout from "../components/layouts/Nested_Layout";
import News from "../components/news/News";
import { ssrAuthCheck } from "../middleware/authCheck";

export default function NewsMain() {



    return (
        <>
            <div className="about_bg">
                <div className="text-center about_text">
                    <p>ORGANIC INFORMATION</p>
                    <h1>News Article</h1>
                </div>
            </div>
            <section className="pb-5 my-5">
                <div className="container">
                    <div className="row">
                        <News />
                    </div>
                </div>
            </section>
            <CompanyLogo />
        </>
    )
}
// NewsMain.getLayout = NestedLayout;

NewsMain.getInitialProps = async (ctx) => {
    await ssrAuthCheck(ctx, 'NewsMain');
    return {};
}

