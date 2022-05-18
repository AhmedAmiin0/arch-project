import {
    Iframe,
    PlayButton,
    VideoBackground,
    VideoContainer,
    VideoOverlay,
    VideoSectionStyles,
    VideoThumbnail
} from "./VideoSection.styles";
import {BsPlay} from "react-icons/bs";
import {useState} from "react";

const video = {
    src: "https://www.youtube.com/embed/vt5Lu_ltPkU",
    thumbnail: "/videobackground.webp"

}
export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    return <VideoSectionStyles>
        <VideoThumbnail background={video.thumbnail}/>
        <PlayButton onClick={() => setIsPlaying(true)}><BsPlay/></PlayButton>
        {isPlaying && <VideoOverlay >
            <VideoBackground isPlaying={isPlaying} onClick={() => setIsPlaying(false)}/>
            <VideoContainer onClick={() => setIsPlaying(false)}>
                    <Iframe  src={video.src}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="allowfullscreen"
                    >
                    </Iframe>
            </VideoContainer>
        </VideoOverlay>}
    </VideoSectionStyles>
}