import AboutComponent from "../components/about/About_Component";
import NestedLayout from "../components/layouts/Nested_Layout";

export default function About(){
    return(
        <>
            <AboutComponent/>
        </>
    )
}
About.getLayout = NestedLayout;
