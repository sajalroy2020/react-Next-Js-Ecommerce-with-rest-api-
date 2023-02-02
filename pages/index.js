import CompanyLogo from "../components/company_logos/Cmpany_Logos";
import DiscountProduct from "../components/discount/Discount_Product";
import FruitikaVideo from "../components/fruitika_video/Fruitika_Video";
import NestedLayout from "../components/layouts/Nested_Layout";
import MOnthlyDiscount from "../components/monthly_discounts/Monthly_Discount";
import News from "../components/news/News";
import Product from "../components/products/Product";
import Support from "../components/support/Support";
import HomeMain from "./Home_main";

const Home = () => {
  return (
    <div>
      <HomeMain />
      <Support />
      <Product />
      <DiscountProduct />
      <FruitikaVideo />
      <MOnthlyDiscount />
      <News />
      <CompanyLogo />
    </div>
  )
}
export default Home;
