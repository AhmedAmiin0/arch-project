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

export const GridSection = ({projects, meta}) => {

  return <GridSectionContainer>
    <Container>
      <SectionHeader>
        <IconicBar/>
        <span> LATEST PROJECTS</span>
        <h1>Touch modern concepts and designs with Luxe Architecture.</h1>
      </SectionHeader>
      <GallaryRaw>
        {projects?.map((item, i) => {
          return <Link href={item.link} key={i}>
            <GridBox>
              <GridBoxImage image={item.src}/>
              <GridBoxIcon>
                <AiOutlineArrowRight/>
              </GridBoxIcon>
              <FixedText>{item.title}</FixedText>
            </GridBox>
          </Link>
        })}
      </GallaryRaw>
    </Container>
  </GridSectionContainer>
};