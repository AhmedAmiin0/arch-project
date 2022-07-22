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
import useTranslation from "next-translate/useTranslation";

export default function Breadcrumb({props}) {
  const {t} = useTranslation()
  const router = useRouter().pathname;
  const {locale} = router
  const path = router.split("/")
  return <BreadcrumbSection>
    {props && <BreadcrumbContainer>
      <IconicBar/>
      <Subtitle locale={locale}>
        {props?.subtitle ?? ""}
      </Subtitle>
      <Title>
        {props?.title ?? path[path.length - 1]}
      </Title>
      <Links>
        <PrevLink>
          <Link href="/">
            <a>{t("common:main")}</a>
          </Link> /
        </PrevLink>
        <ActiveLink>
          <a>{props?.title ?? path[path.length - 1]}</a>
        </ActiveLink>
      </Links>
    </BreadcrumbContainer>}
  </BreadcrumbSection>
}