import {ServiceDetailsStyles} from "../../components/services/ServicesDetails/ServiceDetailsStyles";
import FirstSectionInServicesDetails
    from "../../components/services/ServicesDetails/FirstSectionInServicesDetails/FirstSectionInServicesDetails";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import ServiceSlider from "../../components/services/ServicesDetails/ServiceSlider/ServiceSlider";
import ServiceDetailsParagraphs
    from "../../components/services/ServicesDetails/ServiceDetailsParagraphs/ServiceDetailsParagraphs";
import RelatedProjects from "../../components/services/ServicesDetails/RelatedProjects/RelatedProjects";
import Layout from "../../components/layout/Layout";

export default function ServiceDetails() {
    const data = {
        subtitle: 'CONSULTATION SERVICE',
        title: 'To provide great design that improves the human experience.',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu facilisis sed."
    }

    function NavigationArrows(props) {
        const {className, onClick, isRigth} = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                {isRigth ? <FaArrowRight/> : <FaArrowLeft/>}
            </div>
        );
    }

    const Images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg'
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NavigationArrows isRigth={true}/>,
        prevArrow: <NavigationArrows isRigth={false}/>
    };
    return <Layout>

    <ServiceDetailsStyles>
        <FirstSectionInServicesDetails props={data}/>
        <ServiceSlider/>
        <ServiceDetailsParagraphs/>
        <RelatedProjects/>
    </ServiceDetailsStyles>
    </Layout>
}