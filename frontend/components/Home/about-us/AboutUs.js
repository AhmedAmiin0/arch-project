import {AboutUsContainer} from "./AboutUs.styles";
import {IconicBar} from "../hero/Slider.styles";




export const AboutUsHome = ({data}) => {
  return <AboutUsContainer>
    <IconicBar/>
    <span> {data?.title}</span>
    <h1>{data?.subtitle}</h1>
    <p> {data?.content}</p>
  </AboutUsContainer>
}