import {
    FirstSectionInAboutContent, FirstSectionInAboutContentContainer,
    FirstSectionInAboutImageContainer, FirstSectionInAboutStyles,
    Subtitle,
    Title
} from "./FirstSectionInAbout.styles";
import Image from 'next/image'
import {IconicBar} from "../../Home/hero/Slider.styles";
export default function FirstSectionInAbout({componentDirection = "ltr"}) {
    return <FirstSectionInAboutStyles>
        <FirstSectionInAboutImageContainer componentDirection={componentDirection}>
            <Image src='/2.jpg' layout={'fill'} objectFit={"cover"}/>
        </FirstSectionInAboutImageContainer>
        <FirstSectionInAboutContentContainer componentDirection={componentDirection}>
            <FirstSectionInAboutContent>
                <IconicBar style={{marginBottom: '32px'}}/>
                <Subtitle>
                    WHO ARE WE?
                </Subtitle>
                <Title>
                    We build our projects with your dreams and ideas.
                </Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Urna molestie at elementum eu facilisis sed. Justo nec ultrices dui sapien
                    eget mi proin. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Viverra suspendisse
                    potenti nullam ac tortor vitae purus. Sollicitudin aliquam ultrices sagittis orci. Viverra justo nec
                    ultrices dui sapien eget. Sed elementum tempus egestas.</p>
                <p>Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius. Risus sed
                    vulputate odio ut enim blandit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Purus in
                    massa tempor nec feugiat nisl pretium fusce. Pellentesque eu tincidunt tortor aliquam nulla.
                    Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vulputate euultrices vitae auctor eu
                    augue ut lectus arcu bibendum. Purus in
                    massa tempor nec feugiat nisl pretium fusce. Pellentesque eu tincidunt tortor aliquam nulla.
                    Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vulputate eu scelerisque felis
                    imperdiet proin fermentum leo vel orci. Adipiscing tristique risus nec feugiat in.</p>
            </FirstSectionInAboutContent>
        </FirstSectionInAboutContentContainer>
    </FirstSectionInAboutStyles>
}