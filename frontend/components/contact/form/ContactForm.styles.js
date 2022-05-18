import styled from "styled-components";
import {devices} from "../../layout/GlobalStyle ";

export const ContactFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  width: 80%;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 120px;
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;
export const ContactFormUserData = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  width: 100%;
  //height: 100%;
  padding: 0 15px;


  & input {
    display: block;
    width: 100%;
    padding: 16px;
    background-color: rgb(${props => props.theme.bg});
    background-image: none;
    border: 2px solid #dbdbdb;
    color: ${props => props.theme.text};
    box-shadow: none;
    line-height: 1.5;
    height: auto;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
    border-radius: 0;
    outline: 0;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 24px;
  }

  & textarea {
    display: block;
    width: 100%;
    padding: 16px;
    height: 228px;
    background-color: rgb(${props => props.theme.bg});
    background-image: none;
    border: 2px solid #dbdbdb;
    color: ${props => props.theme.text};
    box-shadow: none;
    line-height: 1.5;
    //height: auto;
    transition: .2s;
    border-radius: 0;
    outline: 0;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 24px;
  }

  & input[type='submit'] {
    -webkit-transition: .2s;
    -moz-transition: .2s;
    -o-transition: .2s;
    transition: .2s;
    outline: 0;
    height: auto;
    padding: 16px;
    border-radius: 0;
    background-color: ${props => props.theme.text};
    color: rgb(${props => props.theme.bg});
    border: 2px solid #000;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
  }
`;
