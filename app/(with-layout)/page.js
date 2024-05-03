import Hero from "../components/Hero";
import Catagory from "../components/Home/Catagory";
import FeatureProducts from "../components/Home/FeatureProducts";
import PopularMenu from "../components/Home/PopularMenu";
import TopBanner from "../components/Home/TopBanner";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <TopBanner />
      <FeatureProducts />
      <Catagory />
      <PopularMenu />
    </div>
  );
}
