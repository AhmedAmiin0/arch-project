import {
    ClientBox, ClientLink,
    ClientLogoContainer,
    ClientSectionContainer,
    ClientSectionGrid,
    ClientSectionHeader
} from "./ClientSection.styles";
import {Container} from "../../layout/GlobalStyle ";
import {IconicBar} from "../hero/Slider.styles";
import Image from "next/image";

export const Clients = () => {
    return <ClientSectionGrid>
        <ClientBox>
            <ClientLogoContainer>
                <Image src='/logo.png' height={100} width={100} objectFit={'cover'}/>
            </ClientLogoContainer>
            <ClientLink>
                Visit Website
            </ClientLink>
        </ClientBox>
        <ClientBox>
            <ClientLogoContainer>
                <Image src='/logo.png' height={100} width={100} objectFit={'cover'}/>
            </ClientLogoContainer>
            <ClientLink>
                Visit Website
            </ClientLink>
        </ClientBox>
        <ClientBox>
            <ClientLogoContainer>
                <Image src='/logo.png' height={100} width={100} objectFit={'cover'}/>
            </ClientLogoContainer>
            <ClientLink>
                Visit Website
            </ClientLink>
        </ClientBox>
        <ClientBox>
            <ClientLogoContainer>
                <Image src='/logo.png' height={100} width={100} objectFit={'cover'}/>
            </ClientLogoContainer>
            <ClientLink>
                Visit Website
            </ClientLink>
        </ClientBox>
        <ClientBox>
            <ClientLogoContainer>
                <Image src='/logo.png' height={100} width={100} objectFit={'cover'}/>
            </ClientLogoContainer>
            <ClientLink>
                Visit Website
            </ClientLink>
        </ClientBox>
    </ClientSectionGrid>
}
export const ClientSection = (props) => {
    return <ClientSectionContainer background={props.background} textColor={props.textColor}>
        <Container>
            <ClientSectionHeader>
                <IconicBar/>
                <span> LATEST PROJECTS</span>
                <h1>Touch modern concepts and designs with Luxe Architecture.</h1>
            </ClientSectionHeader>
            <Clients/>
        </Container>
    </ClientSectionContainer>
}