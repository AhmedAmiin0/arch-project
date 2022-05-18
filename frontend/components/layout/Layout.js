import Footer from "./Footer/Footer";
import {Navbar} from "./Navbar/Navbar";
import {Theme} from "./GlobalStyle ";
import {createContext, useEffect, useState} from "react";
import SearchModel from "./Navbar/search/Search";
import {useRouter} from "next/router";

export const StateContext = createContext();

const Layout = ({children}) => {
    const [searchState, dispatchSearch] = useState(false);
    const Router = useRouter();

    useEffect(() => {
        if (Router.locale === 'ar') {
            document.body.dir = 'rtl';

        } else {
            document.body.dir = 'ltr';
        }

    }, [Router.locale]);
    return (
        <StateContext.Provider value={[searchState, dispatchSearch]}>
            <Theme>
                <Navbar/>
                <main
                    style={
                        searchState
                            ? {
                                position: "fixed",
                                width: "100%",
                                left: 0,
                                top: 0,
                            }
                            : {}
                    }
                >
                    {children}
                </main>
                <SearchModel/>
                <Footer/>
            </Theme>
        </StateContext.Provider>
    );
};
export default Layout;
