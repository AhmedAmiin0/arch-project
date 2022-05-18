import Breadcrumb from "../components/layout/breadcrumb/Breadcrumb";
import FirstSectionInAbout from "../components/about/firstsectioninabout/FirstSectionInAbout";
import SecondSectionInAbout from "../components/about/secondsectioninabout/SecondSectionInAbout";
import VideoSection from "../components/about/videosection/VideoSection";
import {Services} from "../components/Home/service/Servcie";
import {ClientSection} from "../components/Home/ClientsSection/ClientSection";
import FeedbackStyle2 from "../components/about/Feedback/FeedbackStyle2";

export default function about() {
    const props = {
        title: "ِAbout Us",
        subtitle: "our story",
        secondSection: {
            subtitle: 'OUR CAPABILITIES',
            title: 'Unique solutions for your home through a personalized process.',
            description: ` Nibh praesent
            tristique magna
            sit amet
            purus gravida
            quis blandit.Eget
            sit amet
            tellus cras
            adipiscing enim
            eu
            . Sit
            amet nisl
            purus
            in mollis
            nunc
            . Praesent
            semper feugiat
            nibh sed
            pulvinar proin
            gravida
            . Ut
            etiam
            sit amet
            nisl purus in mollis
            nunc sed.Vulputate
            enim nulla
            aliquet porttitor
            lacus luctus
            accumsan tortor.Enim
            sit amet
            venenatis urna.Mauris
            nunc congue
            nisi vitae
            suscipit tellus
            mauris a.Quis
            blandit turpis
            cursus
            in hac
            habitasse platea
            dictumst quisque.`
        }
    }
    let theme = {
        background: "#3b0f62",
        color: "#fff",
    }
    return <>
        <Breadcrumb props={props}/>
        <FirstSectionInAbout/>
        <SecondSectionInAbout props={props.secondSection}/>
        <VideoSection/>
        <Services/>
        <ClientSection background="#3b0f62" textColor="#fff"/>
        <FeedbackStyle2/>

    </>
}