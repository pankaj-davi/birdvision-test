import Slider from "react-slick";


const SliderImages = ({children}: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
       {children}
      </Slider>
    </div>
  );
}

export default SliderImages;
