import Layout1 from "../components/layout/Layout";
import Layout2 from "../components/dashboard/login/Layout/Layout";
import Layout3 from "../components/dashboard/layout/Layout"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import 'react-quill/dist/quill.snow.css'


// import '/styles/styles.css'
import {useEffect} from "react";
import {useRouter} from "next/router";


function MyApp({Component, pageProps}) {
    const Router = useRouter();
    const layouts = {
        L1: Layout1,
        L2: Layout2,
        L3: Layout3,
    }
    const Layout = layouts[Component.layout] ?? Layout1;
    useEffect(() => {
        Router.events.on("routeChangeStart", () => console.log('start'));
        Router.events.on("routeChangeComplete", () => console.log('end'));
        Router.events.on("routeChangeError", () => console.log('aaaa'));
    }, [Router]);
    return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
