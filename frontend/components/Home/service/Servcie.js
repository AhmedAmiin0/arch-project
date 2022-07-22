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


export const Services = ({service}) => {
    // const [active, setActive] = useState(0);
    // console.log(active);

    return <ServicesSection>
        <Container>
            <Raw>
                {service.map((item, i) => {
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