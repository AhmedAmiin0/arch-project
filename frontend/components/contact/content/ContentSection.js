import {
  ContentContainer,
  ContentSectionStyles,
  ImageContainer,
} from "./ContentSection.styles";
import { Container } from "../../layout/GlobalStyle ";
import Image from "next/image";

export default function ContactContent() {
  return (
    <ContentSectionStyles>
      <ContentContainer>
        <h1>We build our projects with your dreams and ideas.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
          molestie at elementum eu facilisis sed. Justo nec ultrices dui sapien
          eget mi proin. Lorem sed risus ultricies tristique nulla aliquet enim
          tortor at. +(01) 426-9824 hello@gloriathemes.com 1418 Luxe Street,
          Suite 3845 California, Luxe Architecture We open at 09:00 – 18:00 on
          weekdays.
        </p>
      </ContentContainer>
      <ImageContainer>
        <Image src="/3.jpg" layout={"fill"} alt={"imagename"} />
      </ImageContainer>
    </ContentSectionStyles>
  );
}
