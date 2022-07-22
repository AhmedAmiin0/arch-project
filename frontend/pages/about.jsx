import Breadcrumb from "../components/layout/breadcrumb/Breadcrumb";
import FirstSectionInAbout from "../components/about/firstsectioninabout/FirstSectionInAbout";
import SecondSectionInAbout from "../components/about/secondsectioninabout/SecondSectionInAbout";
import VideoSection from "../components/about/videosection/VideoSection";
import {Services} from "../components/Home/service/Servcie";
import {ClientSection} from "../components/Home/ClientsSection/ClientSection";
import FeedbackStyle2 from "../components/about/Feedback/FeedbackStyle2";
import Layout from "../components/layout/Layout";
import Head from 'next/head'
import useTranslation from "next-translate/useTranslation";

export default function about() {
  const {t} = useTranslation()
  const props = {
    title: t("common:about"),
    subtitle: t('about:story'),
    fistSection: {
      subtitle: t('about:title'),
    },
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
  const banners = [{
    image: "/1.jpg",
    title: "Cultural",
    subtitle: "The Edition Bookstore, Library and Cafe in Berlin",
    link: "/projects/project_overview_page"
  },
    {
      image: "/2.jpg",
      title: "Cultural",
      subtitle: "The Edition Bookstore, Library and Cafe in Berlin",
      link: "/projects/project_overview_page"
    },
    {
      image: "/3.jpg",
      title: "Cultural",
      subtitle: "The Edition Bookstore, Library and Cafe in Berlin",
      link: "/projects/project_overview_page"
    },
    {
      image: "/4.jpg",
      title: "Cultural",
      subtitle: "The Edition Bookstore, Library and Cafe in Berlin",
      link: "/projects/project_overview_page"
    },
    {
      image: "/5.jpg",
      title: "Cultural",
      subtitle: "The Edition Bookstore, Library and Cafe in Berlin",
      link: "/projects/project_overview_page"
    },


  ];
  const about = {
    title: "About Us",
    subtitle: "We build our projects with your dreams and ideas",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Urna molestie at elementum eu facilisis sed.`
  }
  const content = [
    {
      subtitle: 'Your Imagination',
      title: 'Interior Design',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam.",
      src: '1.jpg'
    },
    {
      subtitle: 'Planning & Development',
      title: 'Planning',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      src: '2.jpg'
    },
    {
      subtitle: 'Best Solutions',
      title: 'Project Management',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      src: '3.jpg'
    }
  ]
  const projects = [
    {
      title: 'Gloria Life Center',
      src: './1.jpg',
      link: '/projects/project_overview_page',
    },
    {
      title: 'Fantastic Life Hotel & Spa',
      src: './2.jpg',
      link: '/projects/project_overview_page',
    },
    {
      title: 'Grand Tower',
      src: './3.jpg',
      link: '/projects/project_overview_page',
    },
    {
      title: 'England Grand Mall',
      src: './4.jpg',
      link: '/projects/project_overview_page',
    },
    {
      title: 'Office of Luxe Architecture',
      src: './5.jpg',
      link: '/projects/project_overview_page',
    },
    {
      title: 'Spectrum Villa',
      src: './1.jpg',
      link: '/projects/project_overview_page',
    }
  ]
  const myClients = {
    title: 'Latest Projects',
    subtitle: 'Touch modern concepts and designs with Luxe Architecture.',
    companies: [
      {
        src: '/logo.png',
        link: '#'
      },
      {
        src: '/logo.png',
        link: '#'
      },
      {
        src: '/logo.png',
        link: '#'
      },
      {
        src: '/logo.png',
        link: '#'
      },
      {
        src: '/logo.png',
        link: '#'
      },
    ]
  }
  const feedbacks = [
    {
      name: 'John Doe',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      src: '/feedback1.webp'
    }, {
      name: 'John Doe',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      src: '/feedback1.webp'
    }, {
      name: 'John Doe',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      src: '/feedback1.webp'
    }, {
      name: 'John Doe',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      src: '/feedback1.webp'
    }, {
      name: 'John Doe',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      src: '/feedback1.webp'
    }, {
      name: 'John Doe',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      src: '/feedback1.webp'
    }, {
      name: 'John Doe',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      src: '/feedback1.webp'
    },

  ]
  let theme = {
    background: "#3b0f62",
    color: "#fff",
  }

const video = {
    src: "https://www.youtube.com/embed/vt5Lu_ltPkU",
    thumbnail: "/videobackground.webp"

}
let data = [
  {
    title: "Maria Martinez",
    subtitle: "Manager at Grand Tower",
    content: `Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
        Risus sed vulputate odio ut enim blandit.
    `,
    src: '/feedback1.webp'
  },{
    title: "Maria Martinez",
    subtitle: "Manager at Grand Tower",
    content: `Nibh tellus molestie nunc non blandit massa. In tellus integer feugiat scelerisque varius.
        Risus sed vulputate odio ut enim blandit.
    `,
    src: '/feedback1.webp'
  },
]
  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Layout>
      <Breadcrumb props={props}/>
      {props.fistSection && <FirstSectionInAbout data={props.fistSection}/>}
      {props.secondSection && <SecondSectionInAbout props={props.secondSection}/>}
      {video && <VideoSection video={video}/>}
      {content && <Services service={content}/>}
      {myClients && <ClientSection data={myClients}/>}
      {data && <FeedbackStyle2 data={data}/>}
    </Layout>
  </>
}
