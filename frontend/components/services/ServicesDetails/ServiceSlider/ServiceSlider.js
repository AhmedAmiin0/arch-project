import {Container} from "../../../layout/GlobalStyle ";
import {ServiceDetailsWrapper} from "./ServiceSlider.styles";
import Image from 'next/image';
import Slider from "react-slick";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

export default function ServiceSlider() {
    function NavigationArrows(props) {
        const {className, onClick, isRigth} = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                {isRigth ? <FaArrowRight/> : <FaArrowLeft/>}
            </div>
        );
    }

    const Images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg'
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NavigationArrows isRigth={true}/>,
        prevArrow: <NavigationArrows isRigth={false}/>
    };
    return <Container>
        <Slider  {...settings}>
            {Images.map((image, index) => (
                <ServiceDetailsWrapper key={index}>
                    <Image src={`/${image}`} layout={'fill'} objectFit={'cover'}/>
                </ServiceDetailsWrapper>
            ))}
        </Slider>
    </Container>
}