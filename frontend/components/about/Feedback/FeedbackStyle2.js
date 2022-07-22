import {FeedbackStyle2Overlay, FeedbackWrapper} from "./FeedbackSyle2.styles";
import {Container} from "../../layout/GlobalStyle ";
import Slider from "react-slick";
import {
  FeedbackImage,
} from "../../Home/feedbacks/FeedbackSection.styles";
import Image from 'next/image';

export default function FeedbackStyle2({data}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <FeedbackStyle2Overlay>
    <Container>
      <Slider {...settings}>
        {data.map((item, index) => {
          return <FeedbackWrapper>
            <FeedbackImage>
              {item.src && <Image src={item.src} width={65} height={65} objectFit={"cover"} alt={'a'}/>}
            </FeedbackImage>
            <span>{item?.title}</span>
            <h2>{item?.subtitle}</h2>
            <p>{item?.content}</p>
          </FeedbackWrapper>
        })}
      </Slider>
    </Container>
  </FeedbackStyle2Overlay>
}
