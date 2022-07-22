import {
  FeedbackContainer,
  FeedBackContent, FeedbackDescription,
  FeedbackImage,
  FeedbackStyle1Overlay, FeedbackSubTitle,
  FeedbackTitle
} from "./FeedbackSection.styles";
import {Container} from "../../layout/GlobalStyle ";
import Slider from 'react-slick'
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export const FeedbackSectionStyle1 = ({feedbacks}) => {
  return <FeedbackStyle1Overlay>
    <Container>
      <FeedbackContainer>
        <Slider {...settings}>
          {feedbacks?.map((item, i) => {
            return <FeedBackContent key={i}>
              <FeedbackImage>
                <Image src={item.src} width={65} height={65} objectFit={"cover"}/>
              </FeedbackImage>
              <FeedbackTitle>
                {item.name}
              </FeedbackTitle>
              <FeedbackSubTitle>
                {item.title}
              </FeedbackSubTitle>
              <FeedbackDescription>
                {item.description}
              </FeedbackDescription>
            </FeedBackContent>
          })}
        </Slider>
      </FeedbackContainer>
    </Container>
  </FeedbackStyle1Overlay>
}