import styled from "styled-components";
import {devices} from "../GlobalStyle ";
import {SideBarSocialBox} from "../Navbar/Navbar.styles";

export const FooterContainer = styled.footer`
  overflow: hidden;
`;
export const FooterContent = styled.div`
  border-top: 1px solid rgba(0, 0, 0, .08);
  width: 100%;
  min-height: 96px;
  padding: 96px 0 60px;
  color: rgba(0, 0, 0, .6);
`;
export const InnerFooter = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;
export const AgencyDescription = styled.div`
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${devices.laptop} {
    width: 49%;
  }
`;
export const GetInTouch = styled(AgencyDescription)`
  //text-align: end;
  align-items: end;
  h3 {
    font-weight: 700;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  flex-direction: column;
  @media ${devices.laptop} {
    flex-direction: row;
    //align-items: flex-start;
  }
`;
export const SocialBox = styled(SideBarSocialBox)`
  //text-align: end;
  margin-top: 0;
`
