import Breadcrumb from "../components/layout/breadcrumb/Breadcrumb";
import HeaderSection from "../components/contact/content/ContentSection";
import ContactForm from "../components/contact/form/ContactForm";

const contact = () => {
    const props = {
        title: "Contact",
    }
    return <>
        <Breadcrumb props={props}/>
        <HeaderSection/>
        <ContactForm />
    </>
}
export default contact;