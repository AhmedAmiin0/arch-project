import styled, {css} from 'styled-components';
import {Container} from "../../GlobalStyle ";

export const SearchWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 300;
  display: flex;
  transition: all .8s ease-in-out;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .98);
  visibility: hidden;
  opacity: 0;
  transform: translateY(32px);
  ${props => props.isOpen && css`
    visibility: visible;
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0);
  `
  }
`
export const CloseSearchBox = styled.div`
  width: 48px;
  height: 48px;
  transition: all .4s ease-in-out;
  background-color: transparent;
  border-radius: 2px;
  position: absolute;
  right: 24px;
  top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transform: translateY(32px);
  ${props => props.isOpen && css`
    visibility: visible;
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0);
  `
  }
`
export const SearchContainer = styled(Container)`
  transition: all .4s ease-in-out;
  ${props => props.isOpen ? css`
    opacity: 1;
    visibility: visible;
    transform: matrix(1, 0, 0, 1, 0, 0);` : css`
    opacity: 0;
    visibility: hidden;
    transform: translateY(32px);
  `};
`
export const SmallSearchText = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;

  strong {
    font-weight: bolder;
  }
`
export const SearchForm = styled.div`
  width: 100%;
  padding: 24px 0;
  border-bottom: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      background-color: transparent;
      border: none;
      color: #000;
      cursor: pointer;
    }

    input {
      width: 90%;
      background-color: transparent;
      padding-left: 0;
      border: none;
      color: #000;
      font-size: 1.625rem;
      transition: .2s;
      border-radius: 0;
      font-weight: 500;
      box-shadow: none;
      line-height: 1.5;
      height: auto;
      background-image: none;
      display: block;
      outline: 0;
    }
  }



`