import {
    GallaryRaw,
    GridBox,
    GridBoxImage,
    GridBoxIcon,
    GridSectionContainer,
    FixedText,
    SectionHeader
} from "./GridSection.styles";
import {Container} from "../../layout/GlobalStyle ";
import {AiOutlineArrowRight} from "react-icons/ai";
import {IconicBar} from "../hero/Slider.styles";
import Link from "next/link";

export const GridSection = () => {
    return <GridSectionContainer>
        <Container>
            <SectionHeader>
                <IconicBar/>
                <span> LATEST PROJECTS</span>
                <h1>Touch modern concepts and designs with Luxe Architecture.</h1>
            </SectionHeader>
            <GallaryRaw>
                <Link href='/projects/project_overview_page'>
                    <GridBox>
                        <GridBoxImage image='1.jpg'/>
                        <GridBoxIcon>
                            <AiOutlineArrowRight/>
                        </GridBoxIcon>
                        <FixedText>Gloria Life Center</FixedText>
                    </GridBox>
                </Link>
                <Link href='/projects/project_overview_page'>

                    <GridBox>
                        <GridBoxImage image='1.jpg'/>
                        <GridBoxIcon>
                            <AiOutlineArrowRight/>
                        </GridBoxIcon>
                        <FixedText>Fantastic Life Hotel & Spa</FixedText>
                    </GridBox>
                </Link>
                <Link href='/projects/project_overview_page'>
                    <GridBox>
                        <GridBoxImage image='1.jpg'/>
                        <GridBoxIcon>
                            <AiOutlineArrowRight/>
                        </GridBoxIcon>
                        <FixedText>Grand Tower</FixedText>
                    </GridBox>
                </Link>
                <Link href='/projects/project_overview_page'>
                    <GridBox>
                        <GridBoxImage image='1.jpg'/>
                        <GridBoxIcon>
                            <AiOutlineArrowRight/>
                        </GridBoxIcon>
                        <FixedText>England Grand Mall</FixedText>
                    </GridBox>
                </Link>
                <Link href='/projects/project_overview_page'>
                    <GridBox>
                        <GridBoxImage image='1.jpg'/>
                        <GridBoxIcon>
                            <AiOutlineArrowRight/>
                        </GridBoxIcon>
                        <FixedText>Office of Luxe Architecture</FixedText>
                    </GridBox>
                </Link>
                <Link href='/projects/project_overview_page'>
                    <GridBox>
                        <GridBoxImage image='1.jpg'/>
                        <GridBoxIcon>
                            <AiOutlineArrowRight/>
                        </GridBoxIcon>
                        <FixedText>Spectrum Villa</FixedText>
                    </GridBox>
                </Link>
            </GallaryRaw>
        </Container>
    </GridSectionContainer>
};