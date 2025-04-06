import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="w-[90%] max-w-md mx-auto">
      {images.map((img, index) => (
        <div key={index} className="flex flex-col items-center">
          <h2 className="mb-2 mt-6 text-sm bg-[#fef6d2] px-4 py-1 rounded-full">OUR BEST MOMENTS</h2>
          <img src={img} alt={`Memory ${index}`} className="rounded-lg h-72 object-cover mx-auto" />
        </div>
      ))}
    </Slider>
  );
}
