import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SliderContent } from "./SliderContent";
import { HeroImage, SliderBox } from "./Slider.styles";

export const HeroSlider = ({ aspect }) => {
  function NavigationArrows(props) {
    const { className, onClick, isRigth } = props;
    return (
      <div className={className} onClick={onClick}>
        {isRigth ? <FaArrowRight /> : <FaArrowLeft />}
      </div>
    );
  }

  const Images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // lazyLoad: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NavigationArrows isRigth={true} />,
    prevArrow: <NavigationArrows isRigth={false} />,
  };
  return (
    <SliderBox>
      <Slider {...settings}>
        {Images.map((image, index) => (
          <div
            key={index}
            style={{
              height: aspect.height,
            }}
          >
            <HeroImage
              image={image}
              aspectWidth={aspect.width}
              aspectHeight={aspect.height}
            >
              {aspect.hasLetters && <SliderContent />}
            </HeroImage>
          </div>
        ))}
      </Slider>
    </SliderBox>
  );
};
