import {IconicBar, SliderContentContainer} from "./Slider.styles";
import Link from 'next/link';
export const SliderContent = ({title,slug,subtitle}) => {
    return <SliderContentContainer>
        <IconicBar/>
        <span>
            {  title }
        </span>
        <h1>
            { subtitle }
        </h1>
        <Link href={`${slug}`}>
            <a >View Project</a>
        </Link>
    </SliderContentContainer>
}