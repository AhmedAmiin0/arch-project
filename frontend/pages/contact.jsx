import Breadcrumb from "../components/layout/breadcrumb/Breadcrumb";
import HeaderSection from "../components/contact/content/ContentSection";
import ContactForm from "../components/contact/form/ContactForm";
import Layout from "../components/layout/Layout";

const contact = () => {
  const props = {
    title: "Contact",
  };
  return (
    <Layout>
      <Breadcrumb props={props} />
      <HeaderSection />
      <ContactForm />
    </Layout>
  );
};
export default contact;
