import Slider from "react-slick";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {SliderContent} from "./SliderContent";
import {HeroImage, SliderBox} from "./Slider.styles";
import Image from 'next/image';

export const HeroSlider = ({banners}) => {
  function NavigationArrows(props) {
    const {className, onClick, isRigth} = props;
    return (
      <div className={className} onClick={onClick}>
        {isRigth ? <FaArrowRight/> : <FaArrowLeft/>}
      </div>
    );
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // lazyLoad: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NavigationArrows isRigth={true}/>,
    prevArrow: <NavigationArrows isRigth={false}/>,
  };

  return (
    <SliderBox>
      <Slider {...settings}>
        {banners?.map((banner, index) => (
          <HeroImage key={index}>
            <Image
              src={`${banner.image}`}
              alt="Hero"
              layout={'fill'}
              objectFit={'cover'}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <SliderContent
              title={banner.title}
              subtitle={banner.subtitle}
              slug={banner.link}
            />
          </HeroImage>
        ))}
      </Slider>
    </SliderBox>
  );
};
