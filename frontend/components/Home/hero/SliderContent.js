import {IconicBar, SliderContentContainer} from "./Slider.styles";
import Link from 'next/link';
export const SliderContent = () => {
    return <SliderContentContainer>
        <IconicBar/>
        <span>
            Cultural
        </span>
        <h1>
            The Edition Bookstore, Library and Cafe in Berlin
        </h1>
        <Link href='/projects/project_overview_page'>
            <a >View Project</a>
        </Link>
    </SliderContentContainer>
}