import {FirstSectionInServicesDetailsContainer} from "./FirstSectionInServicesDetails.styles";
import {IconicBar} from "../../../Home/hero/Slider.styles";

export default function FirstSectionInServicesDetails({props}) {

    return <FirstSectionInServicesDetailsContainer>
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
    </FirstSectionInServicesDetailsContainer>
}