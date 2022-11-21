import ContactFrom from "../components/contact_component/Contact_From";
import NestedLayout from "../components/layouts/Nested_Layout";

export default function Contect(){
    return(
        <>
            <div className="about_bg">
                <div className="text-center about_text">
                    <p>GET 24/7 SUPPORT</p>
                    <h1>Contact Us</h1>
                </div>
            </div>
            <ContactFrom/>
        </>
    )
}
Contect.getLayout = NestedLayout;
