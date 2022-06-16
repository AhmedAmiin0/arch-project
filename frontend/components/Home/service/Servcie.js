import {
    Raw,
    ServicesCard, ServicesContent, ServicesImage, ServicesImageContainer,
    ServicesSection,
} from "./Service.style";
import {Container} from "../../layout/GlobalStyle ";
import {IconicBar} from "../hero/Slider.styles";
import {useState} from "react";
import Image from 'next/image';
import Link from "next/link";

const content = [
    {
        subtitle: 'Your Imagination',
        title: 'Interior Design',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam.",
        src: '1.jpg'
    },
    {
        subtitle: 'Planning & Development',
        title: 'Planning',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        src: '2.jpg'
    },
    {
        subtitle: 'Best Solutions',
        title: 'Project Management',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        src: '3.jpg'
    }
]
export const Services = () => {
    // const [active, setActive] = useState(0);
    // console.log(active);

    return <ServicesSection>
        <Container>
            <Raw>
                {content.map((item, i) => {
                    return <Link href='services/service_details_overview' key={i}>
                        <ServicesCard >
                            <ServicesImageContainer>
                                <Image src={`/${item.src}`} layout={'fill'} loading='eager'/>
                            </ServicesImageContainer>
                            <ServicesContent>
                                <h3>{item.subtitle}</h3>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <IconicBar widthBar='2px' heightBar='32px'/>
                                <span>0{i + 1}</span>
                            </ServicesContent>
                        </ServicesCard>
                    </Link>
                })}
            </Raw>
        </Container>
    </ServicesSection>
}