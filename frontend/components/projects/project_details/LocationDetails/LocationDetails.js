import {
    ProjectDetailsBox,
    ProjectDetailsContainer, ProjectDetailsIconicBar,
    ProjectDetailsStyles,
    ProjectSubtitle, ProjectTitle
} from "./LocationDetails.styles";
import {Container} from "../../../layout/GlobalStyle ";

export default function LocationDetails() {
    const myArray = [
        {},
        {},
        {},
        {}
    ]
    return <ProjectDetailsStyles>
        <Container>
            <ProjectDetailsContainer colsNumber={myArray.length}>
                <ProjectDetailsBox>
                    <ProjectDetailsIconicBar />
                    <ProjectSubtitle>
                        Location
                    </ProjectSubtitle>
                    <ProjectTitle>
                        2017
                    </ProjectTitle>
                </ProjectDetailsBox>
                <ProjectDetailsBox>
                    <ProjectDetailsIconicBar />
                    <ProjectSubtitle>
                        Location
                    </ProjectSubtitle>
                    <ProjectTitle>
                        2017
                    </ProjectTitle>
                </ProjectDetailsBox>
                <ProjectDetailsBox>
                    <ProjectDetailsIconicBar />
                    <ProjectSubtitle>
                        Location
                    </ProjectSubtitle>
                    <ProjectTitle>
                        2017
                    </ProjectTitle>
                </ProjectDetailsBox>
                <ProjectDetailsBox>
                    <ProjectDetailsIconicBar />
                    <ProjectSubtitle>
                        Location
                    </ProjectSubtitle>
                    <ProjectTitle>
                        2017
                    </ProjectTitle>
                </ProjectDetailsBox>
            </ProjectDetailsContainer>
        </Container>
    </ProjectDetailsStyles>
}