import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {
    GalleryOverlay,
    GalleryOverlayContainer,
    ProjectGalleryStyles,
    ProjectImageBox,
    ImageContainer,
} from "./ProjectGallery.styles";
import Slider from "react-slick";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {VideoBackground} from "../../../about/videosection/VideoSection.styles";


export default function ProjectGallery() {
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

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NavigationArrows isRigth={true}/>,
        prevArrow: <NavigationArrows isRigth={false}/>
    };

    // console.log(index);
    // setGallery((prev) => {
    //     const newGallery = [...prev.slice(0, index), ...prev.slice(index + 1)];
    //     // console.log(newGallery);
    //     const image = prev[index];
    //     // console.log(image);
    //     return [image, ...newGallery]
    // })
    const gallery = [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
    ]
    const [isOpen, setIsOpen] = useState(false);
    const sliderRef = useRef();
    const HandleClick = (index) => {
        setIsOpen(true);
        sliderRef.current.slickGoTo(index);
    };
    return (
        <ProjectGalleryStyles>
            {gallery.map((image, index) => <ProjectImageBox
                    key={index}
                    onClick={() => HandleClick(index)}>
                    <Image
                        src={image}
                        layout={"responsive"}
                        width={"100%"}
                        height={"100%"}
                        objectFit={"cover"}
                        alt=""
                    />
                </ProjectImageBox>
            )}
            <GalleryOverlay isOpen={isOpen}>
                <VideoBackground isPlaying={isOpen} onClick={() => setIsOpen(false)}/>
                <GalleryOverlayContainer>
                    <div>
                        <Slider  {...settings} ref={sliderRef}>
                            {gallery.map((image, index) =>
                                (<ImageContainer key={index}>
                                        <img src={image} alt={''}/>
                                    </ImageContainer>
                                )
                            )}
                        </Slider>
                    </div>
                </GalleryOverlayContainer>
            </GalleryOverlay>
        </ProjectGalleryStyles>
    );
}
