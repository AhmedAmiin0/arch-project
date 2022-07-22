import {HeroSlider} from "../components/Home/hero/HeroSlider";
import {AboutUsHome} from "../components/Home/about-us/AboutUs";
import {Services} from "../components/Home/service/Servcie";
import {GridSection} from "../components/Home/GridSection/GridSection";
import {ClientSection} from "../components/Home/ClientsSection/ClientSection";
import {FeedbackSectionStyle1} from "../components/Home/feedbacks/FeedbackSection";
import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function Home() {
  let aspect = {height: '100vh', width: '100vw'}
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
    },{
        name: 'John Doe',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        src: '/feedback1.webp'
    },{
        name: 'John Doe',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        src: '/feedback1.webp'
    },{
        name: 'John Doe',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        src: '/feedback1.webp'
    },{
        name: 'John Doe',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        src: '/feedback1.webp'
    },{
        name: 'John Doe',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        src: '/feedback1.webp'
    },{
        name: 'John Doe',
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        src: '/feedback1.webp'
    },

]
  return (<>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        {banners && <HeroSlider banners={banners}/>}
        {about && <AboutUsHome data={about}/>}
        {content && <Services service={content}/>}
        {banners && <HeroSlider banners={banners}/>}
        {projects && <GridSection projects={projects}/>}
        {myClients && <ClientSection data={myClients}/>}
        {feedbacks && <FeedbackSectionStyle1 feedbacks={feedbacks}/>}
      </Layout>
    </>
  )
}


{/*<h2> Single Item</h2>*/
}
{/*<div style={{overflow:'hidden'}}>*/
}

{/*</div>*/
}