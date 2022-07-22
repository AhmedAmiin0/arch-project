import {
    FirstSectionInAboutContent, FirstSectionInAboutContentContainer,
    FirstSectionInAboutImageContainer, FirstSectionInAboutStyles,
    Subtitle,
    Title
} from "./FirstSectionInAbout.styles";
import Image from 'next/image'
import {IconicBar} from "../../Home/hero/Slider.styles";
import {useRouter} from "next/router";
export default function FirstSectionInAbout({componentDirection = "ltr", data}) {
    const router = useRouter();
    const {locale} = router;
    return <FirstSectionInAboutStyles>
        <FirstSectionInAboutImageContainer componentDirection={componentDirection}>
            <Image src='/2.jpg' layout={'fill'} objectFit={"cover"}/>
        </FirstSectionInAboutImageContainer>
        <FirstSectionInAboutContentContainer componentDirection={componentDirection}>
            <FirstSectionInAboutContent>
                <IconicBar style={{marginBottom: '32px'}}/>
                <Subtitle locale={locale}>
                    {data?.subtitle || "who we are?"}
                </Subtitle>
                <Title>
                    { data?.title || "We build our projects with your dreams and ideas."}
                </Title>
                <p>{data?.description || `Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius. Risus sed
                    vulputate odio ut enim blandit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Purus in
                    massa tempor nec feugiat nisl pretium fusce. Pellentesque eu tincidunt tortor aliquam nulla.
                    Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vulputate euultrices vitae auctor eu
                    augue ut lectus arcu bibendum. Purus in
                    massa tempor nec feugiat nisl pretium fusce. Pellentesque eu tincidunt tortor aliquam nulla.
                    Maecenas ultricies mi eget mauris pharetra et ultrices neque. Vulputate eu scelerisque felis
                    imperdiet proin fermentum leo vel orci. Adipiscing tristique risus nec feugiat in.`}</p>
            </FirstSectionInAboutContent>
        </FirstSectionInAboutContentContainer>
    </FirstSectionInAboutStyles>
}