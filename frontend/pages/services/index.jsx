import Breadcrumb from "../../components/layout/breadcrumb/Breadcrumb";
import Layout from "../../components/layout/Layout";
import ServiceBox from "../../components/services/ServiceBox/ServiceBox";
import useTranslation from "next-translate/useTranslation";

export default function services() {
    const {t} = useTranslation()
    let breadcrumb = {
            title: "Services",
            subtitle: "what we do"
        }

    return <Layout>
        <Breadcrumb props={breadcrumb}/>
        <ServiceBox/>
        <ServiceBox ComponentDirection={'rtl'}/>
        <ServiceBox/>
        <ServiceBox ComponentDirection={'rtl'}/>
    </Layout>
}