import Breadcrumb from "../../components/layout/breadcrumb/Breadcrumb";
import Layout from "../../components/layout/Layout";
import ServiceBox from "../../components/services/ServiceBox/ServiceBox";

export default function services() {
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