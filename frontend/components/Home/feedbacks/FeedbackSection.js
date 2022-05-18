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
export const FeedbackSectionStyle1 = () => {
    return <FeedbackStyle1Overlay>
        <Container>
            <FeedbackContainer>
                <Slider {...settings}>
                    <FeedBackContent>
                        <FeedbackImage>
                            <Image src='/feedback1.webp' width={65} height={65} objectFit={"cover"}/>
                        </FeedbackImage>
                        <FeedbackTitle>
                            Maria Martinez
                        </FeedbackTitle>
                        <FeedbackSubTitle>
                            Manager at Grand Tower
                        </FeedbackSubTitle>
                        <FeedbackDescription>
                            Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
                            Risus sed vulputate odio ut enim blandit.
                        </FeedbackDescription>
                    </FeedBackContent>
                    <FeedBackContent>
                        <FeedbackImage>
                            <Image src='/feedback1.webp' width={65} height={65} objectFit={"cover"}/>
                        </FeedbackImage>
                        <FeedbackTitle>
                            Maria Martinez
                        </FeedbackTitle>
                        <FeedbackSubTitle>
                            Manager at Grand Tower
                        </FeedbackSubTitle>
                        <FeedbackDescription>
                            Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
                            Risus sed vulputate odio ut enim blandit.
                        </FeedbackDescription>
                    </FeedBackContent>
                    <FeedBackContent>
                        <FeedbackImage>
                            <Image src='/feedback1.webp' width={65} height={65} objectFit={"cover"}/>
                        </FeedbackImage>
                        <FeedbackTitle>
                            Maria Martinez
                        </FeedbackTitle>
                        <FeedbackSubTitle>
                            Manager at Grand Tower
                        </FeedbackSubTitle>
                        <FeedbackDescription>
                            Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
                            Risus sed vulputate odio ut enim blandit.
                        </FeedbackDescription>
                    </FeedBackContent>
                    <FeedBackContent>
                        <FeedbackImage>
                            <Image src='/feedback1.webp' width={65} height={65} objectFit={"cover"}/>
                        </FeedbackImage>
                        <FeedbackTitle>
                            Maria Martinez
                        </FeedbackTitle>
                        <FeedbackSubTitle>
                            Manager at Grand Tower
                        </FeedbackSubTitle>
                        <FeedbackDescription>
                            Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
                            Risus sed vulputate odio ut enim blandit.
                        </FeedbackDescription>
                    </FeedBackContent>
                    <FeedBackContent>
                        <FeedbackImage>
                            <Image src='/feedback1.webp' width={65} height={65} objectFit={"cover"}/>
                        </FeedbackImage>
                        <FeedbackTitle>
                            Maria Martinez
                        </FeedbackTitle>
                        <FeedbackSubTitle>
                            Manager at Grand Tower
                        </FeedbackSubTitle>
                        <FeedbackDescription>
                            Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
                            Risus sed vulputate odio ut enim blandit.
                        </FeedbackDescription>
                    </FeedBackContent>
                </Slider>
            </FeedbackContainer>
        </Container>
    </FeedbackStyle1Overlay>
}