import {CloseSearchBox, SearchContainer, SearchForm, SearchWrapper, SmallSearchText} from "./Search.styles";
import {GrClose} from "react-icons/gr";
import {useContext, useState} from "react";
import {StateContext} from "../../Layout";
import {useRouter} from "next/router";

export default function SearchModel() {
    const [searchState, dispatchSearch] = useContext(StateContext);
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchValue);
        dispatchSearch(false)
        router.push("/search?q=" + searchValue)
    }
    return <SearchWrapper isOpen={searchState}>
        <CloseSearchBox isOpen={searchState} onClick={() => dispatchSearch(false)}><GrClose/></CloseSearchBox>
        <SearchContainer isOpen={searchState}>
            <SmallSearchText>
                <strong>
                    WHAT ARE YOU LOOKING FOR?
                </strong>
            </SmallSearchText>
            <SearchForm>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter the keyword"
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button>Search</button>
                </form>
            </SearchForm>
        </SearchContainer>
    </SearchWrapper>
}