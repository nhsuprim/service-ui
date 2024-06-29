import Hero from "../components/Hero";
import Catagory from "../components/Home/Catagory";
// import FeatureProducts from "../components/Home/FeatureProducts";
import FeaturedServices from "../components/Home/FeaturedServices";
import PopularMenu from "../components/Home/PopularMenu";
import TopBanner from "../components/Home/TopBanner";
import HeroSection from "../components/Home/HeroSection";
import Testimonial from "../components/Testimonial/Testimonial";
import JoinUs from "../components/JoinUs/JoinUs";

export default function Home() {
    return (
        <div className="overflow-hidden ">
            {/* <TopBanner /> */}
            <HeroSection />
            <FeaturedServices />
            <Testimonial />
            <JoinUs />
            {/* <FeatureProducts /> */}
            {/* <Catagory />
            <PopularMenu /> */}
        </div>
    );
}
