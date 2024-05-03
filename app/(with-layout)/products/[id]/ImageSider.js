import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageSider = ({ productData: data }) => {
  console.log(data);
  return (
    <Carousel>
      {data.image?.map((i) => (
        <div>
          <img src={i.url} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSider;
