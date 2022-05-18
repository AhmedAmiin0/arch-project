import {IconicBar} from "../../Home/hero/Slider.styles";
import {SecondSectionInAboutStyles} from "./SecondSectionInAbout.styles";
import {Container} from "../../layout/GlobalStyle ";

export default function SecondSectionInAbout({props}) {

    return <Container><SecondSectionInAboutStyles>
        <IconicBar/>
        <span>
            {props && props.subtitle}
        </span>
        <h1>
            {props && props.title}

        </h1>
        <p>
            {props && props.description}

        </p>
    </SecondSectionInAboutStyles></Container>
}