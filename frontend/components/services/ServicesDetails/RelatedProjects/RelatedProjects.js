import {
    RelatedProjectBox,
    RelatedProjectContainer,
    RelatedProjectDate, RelatedProjectImagesWrapper,
    RelatedProjectsStyles
} from "./RelatedProjects.styles";
import {Container} from "../../../layout/GlobalStyle ";
import Link from "next/link";
import {useState} from "react";
import Image from 'next/image';

export default function RelatedProjects() {
    let projects = [
        {
            src: '/1.jpg',
            title: 'Project 1',
            place: 'London, England',
            date: '2018',
            category: 'categories 1',
        },
        {
            src: '/2.jpg',
            title: 'Project 2',
            place: 'Place 2',
            date: 'Date 2',
            category: 'categories 2',
        },
        {
            src: '/3.jpg',
            title: 'Project 3',
            place: 'Place 3',
            date: 'Date 3',
            category: 'categories 3',
        }, {
            src: '/1.jpg',
            title: 'Project 1',
            place: 'Place 1',
            date: 'Date 1',
            category: 'categories 1',
        },
        {
            src: '/2.jpg',
            title: 'Project 2',
            place: 'Place 2',
            date: 'Date 2',
            category: 'categories 2',
        },
        {
            src: '/3.jpg',
            title: 'Project 3',
            place: 'Place 3',
            date: 'Date 3',
            category: 'categories 3',
        }
    ]
    const [relatedProjects, setRelatedProjects] = useState(0);
    return <RelatedProjectsStyles>
        <Container>
            <RelatedProjectContainer>
                {projects.map((project, index) => {
                    return <RelatedProjectBox key={index} className="project"
                                              onMouseEnter={() => setRelatedProjects(index)}>
                        <Link href={'/'}><RelatedProjectDate>{project.date}</RelatedProjectDate></Link>
                        <h3>{project.title}</h3>
                        <p>{project.place}</p>
                        <Link href={'/'}><h4>{project.category}</h4></Link>
                    </RelatedProjectBox>
                })}
            </RelatedProjectContainer>
        </Container>
        <RelatedProjectImagesWrapper>
            {projects.map((project, index) =>
                 <Image key={index}  src={project.src} layout={'fill'} objectFit={'cover'}
                      style={relatedProjects === index ? {
                              opacity: 0.5,
                          } : {
                              opacity: 0,
                          }
                      }/>
            )}
            {/*<Image src={relatedProjects.src} layout={"fill"} objectFit={"cover"} style={{*/}
            {/*    opacity: 0.5,*/}
            {/*    visibility: 'visible'*/}
            {/*}}/>*/}
        </RelatedProjectImagesWrapper>
    </RelatedProjectsStyles>
}