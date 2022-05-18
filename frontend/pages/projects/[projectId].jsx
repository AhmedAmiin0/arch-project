import {ProjectDetailsContainer} from "../../components/projects/project_details/ProjectDetails.styles";
import FirstSectionInAbout from "../../components/about/firstsectioninabout/FirstSectionInAbout";
import LocationDetails from "../../components/projects/project_details/LocationDetails/LocationDetails";
import ProjectGallery from "../../components/projects/project_details/ProjectGallery/ProjectGallery";
import AttractiveSection from "../../components/projects/project_details/AttractiveSection/AttractiveSection";
import React from "react";

export default function ProjectsDetails() {

    const myobject = {
        myarray: [1, 2, 4],
        attractiveSection:{
            attractiveImage:'/1.jpg',
            attractiveTitle:'Attractive Title',
            attractiveSubTitle:'Attractive SubTitle',
        }
    }
    let i = false;
    let galleryPlace = Math.floor(myobject.myarray.length / 2)
    console.log(galleryPlace)
    return <ProjectDetailsContainer>
        {myobject.myarray.length == 1 ? <>
                <FirstSectionInAbout/>
                <LocationDetails/>
                <ProjectGallery/>
            </> :
            myobject.myarray.map((item, index) => {
                if (i) {
                    i = !i;
                    return <React.Fragment key={index}>
                        <FirstSectionInAbout componentDirection='rtl'/>
                        {index == 0 && <LocationDetails/>}
                        {galleryPlace == index && <ProjectGallery/>}
                    </React.Fragment>
                }
                i = !i;
                return <React.Fragment key={index}>
                    <FirstSectionInAbout/>
                    {index == 0 && <LocationDetails/>}
                    {galleryPlace == index && <ProjectGallery/>}
                </React.Fragment>
            })
        }
        {myobject.attractiveSection && <AttractiveSection data={myobject.attractiveSection} />}
    </ProjectDetailsContainer>
}