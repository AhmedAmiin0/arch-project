import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import {useState} from "react";
import {useRouter} from "next/router";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const devices = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};
const theme = {
    white: {
        bg: '255,255,255',
        text: '#000'
    },
    dark: {
        bg: 'rgb(0, 0, 0)',
        text: '#fff'
    }
}
// if (localStorage.getItem('theme') === 'dark') {
//     return theme.dark
// }
// localStorage.removeItem('theme')
// return theme.white

export const Theme = ({children}) => {
    const getTheme = () => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('theme') !== null) {
                return theme[localStorage.getItem('theme')]
            }

            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                localStorage.setItem('theme', 'dark')
                return theme.dark;
            }
            localStorage.setItem('theme', 'white')
            return theme.white;
        }
        return theme.white;
    }
    const [viewTheme, setViewTheme] = useState(getTheme())
    const changeTheme = (chosenLook) => {
        setViewTheme(theme[chosenLook]);
        localStorage.setItem('theme', chosenLook);
    }
    const {locale} = useRouter()
    const isAr = locale.toLowerCase() == 'ar' ? true : false
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={{...theme.white, isAr}}>
                {children}
            </ThemeProvider>
        </>
    )
}


const GlobalStyle = createGlobalStyle`



  body {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    color: #505050;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    font-family: 'Rajdhani', sans-serif !important;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    padding: 0;
    margin: 0;
  }

  button {
    border: none;
    background: none;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .slick-prev, .slick-next {
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;
    opacity: .3;
    display: none;
    outline: 0;
    transform: translate(0, -50%);
    z-index: 100;
    border-radius: 96px;
    border: 2.4px solid #fff;
    transition: .3s ease-in-out;
    margin: 0 20px;
  }

  @media (min-width: 1024px) {
    .slick-prev, .slick-next {
      display: flex;
    }
  }

  .slick-prev:hover, .slick-next:hover {
    opacity: 1;
    color: #ffffff;
  }

  .slick-prev:before, .slick-next:before {
    display: none;
  }

  .slick-prev {
    left: 0px;
  }

  .slick-next {
    right: 0px;
  }

  [dir='rtl'] {
    .slick-next {
      left: auto;
      right: 0px;
    }

    .slick-prev {
      right: auto;
      left: 0px;
    }

    .slick-slide {
      //float: left;
      direction: rtl;
    }
  }


`
export default GlobalStyle
export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  @media ${devices.laptop} {
    max-width: 1300px;
  }
`
