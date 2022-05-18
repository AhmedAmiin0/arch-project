import styled from "styled-components";
import {devices} from "../../layout/GlobalStyle ";

export const FeedbackStyle1Overlay = styled.section`
  position: relative;
  background: #3b0f62 url(https://demo.gloriathemes.com/luxe/demo/wp-content/uploads/2018/09/home-3-testimonial.jpg?id=544) !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 0px;
  padding-right: 0px;

  .slick-dots {
    direction: ${props => props.theme.isAr ? 'rtl' : 'ltr'};
    text-align: start;
  }

  .slick-prev, .slick-next {
    visibility: hidden !important;
  }

  .slick-dots li {
    width: 30px;
    height: 3px;
    background: #adadad;
  }

  .slick-dots button:before {
    width: 100%;
    content: '';
  }

  .slick-dots li.slick-active {
    background: rgba(255, 255, 255, .9)
  }
`;

export const FeedbackContainer = styled.div`
  width: 100%;
  @media ${devices.laptop} {
    width: 50%;
  }
  color: rgb(${props => props.theme.bg});
`;

export const FeedBackContent = styled.div`
  display: flex;
  flex-direction: column;

`
export const FeedbackImage = styled.div`
  margin-bottom: 15px;
`
export const FeedbackTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  //margin-bottom: 32px;
  color: rgb(${props => props.theme.bg});
`
export const FeedbackSubTitle = styled.div`
  font-size: .85rem;
  margin-bottom: 16px;
  color: rgba(${props => props.theme.bg}, .5);
`
export const FeedbackDescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 32px;
  color: rgb(${props => props.theme.bg});

`