import {FeedbackStyle2Overlay, FeedbackWrapper} from "./FeedbackSyle2.styles";
import {Container} from "../../layout/GlobalStyle ";
import Slider from "react-slick";
import {
    FeedbackImage,
} from "../../Home/feedbacks/FeedbackSection.styles";
import Image from 'next/image';

export default function FeedbackStyle2() {
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
                <FeedbackWrapper>
                    <FeedbackImage>
                        <Image src='/feedback1.webp' width={65} height={65} objectFit={"cover"} alt={'a'}/>
                    </FeedbackImage>
                    <span>
                        Maria Martinez
                    </span>
                    <h2>
                        Manager at Grand Tower
                    </h2>
                    <p>
                        Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
                        Risus sed vulputate odio ut enim blandit.
                    </p>
                </FeedbackWrapper>
                <FeedbackWrapper>
                    <FeedbackImage>
                        <Image src='/feedback1.webp' width={65} height={65} objectFit={"cover"} alt={'waf'}/>
                    </FeedbackImage>
                    <span>
                        Maria Martinez
                    </span>
                    <h2>
                        Manager at Grand Tower
                    </h2>
                    <p>
                        Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
                        Risus sed vulputate odio ut enim blandit.
                    </p>
                </FeedbackWrapper>
            </Slider>
        </Container>
    </FeedbackStyle2Overlay>
}