import {Container} from "../../layout/GlobalStyle ";
import {PaginationContainer, PaginationItem} from "./Pagination.styles";

export default function  Pagination(){
    return <Container>
        <PaginationContainer>
            <PaginationItem isActive>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationItem>3</PaginationItem>
            <PaginationItem>next</PaginationItem>
        </PaginationContainer>
    </Container>
}