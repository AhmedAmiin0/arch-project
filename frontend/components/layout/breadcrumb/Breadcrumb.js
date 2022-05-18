import {
    Subtitle,
    Title,
    BreadcrumbSection,
    BreadcrumbContainer,
    Links,
    PrevLink,
    ActiveLink
} from "./Breadcrumb.styles";
import {IconicBar} from "../../Home/hero/Slider.styles";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Breadcrumb({props}) {
    const router = useRouter().pathname;
    const path = router.split('/');
    return <BreadcrumbSection>
        {props && <BreadcrumbContainer>
            <IconicBar/>
            <Subtitle>
                {props.subtitle}
            </Subtitle>
            <Title>
                {props.title}
            </Title>
            <Links>
                {path.map((item, i) => {
                    if (item == '') {
                        return <PrevLink key={i}>
                            <Link href="/">
                                <a>Home</a>
                            </Link> /
                        </PrevLink>
                    }
                    if (item[item.length - 1]) {
                        return <ActiveLink key={i}>
                            <a>{item}</a>
                        </ActiveLink>
                    }
                })}
            </Links>
        </BreadcrumbContainer>}
    </BreadcrumbSection>
}