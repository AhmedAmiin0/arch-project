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

export const Clients = ({companies}) => {
  return <ClientSectionGrid>
    {companies?.map((item, i) => {
      return <ClientBox key={i}
                        href={item.link}
      >
        <ClientLogoContainer>
          <Image src={item.src} height={100} width={100} objectFit={'cover'}/>
        </ClientLogoContainer>
        <ClientLink>
          Visit Website
        </ClientLink>
      </ClientBox>
    })
    }
  </ClientSectionGrid>
}
export const ClientSection = ({data}) => {
  return <ClientSectionContainer >
    <Container>
      <ClientSectionHeader>
        <IconicBar/>
        <span> {data.title}</span>
        <h1>{data.subtitle}</h1>
      </ClientSectionHeader>
      <Clients companies={data.companies}/>
    </Container>
  </ClientSectionContainer>
}
