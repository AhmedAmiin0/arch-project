import styled from "styled-components";

export const PaginationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  font-weight: 600;
  font-size: .9rem;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;


`;
export const PaginationItem = styled.li`
  background: ${props => props.isActive ? '#e9ecef' : 'rgb(props.theme.bg)'};
  color: ${props => props.theme.text};
  padding: 12px 15px 10px;
  position: relative;
  display: block;
  margin-left: -1px;
  line-height: 1.25;
  border: 1px solid #dee2e6;

  &:hover {
    background: #e9ecef;
  }

`;
