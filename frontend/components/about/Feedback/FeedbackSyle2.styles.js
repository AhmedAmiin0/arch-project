import styled from "styled-components";

export const FeedbackStyle2Overlay = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f6f9;
  position: relative;
  padding: 120px 0;
  color: #000 !important;

  //.slick-dots {
  //  color: #d0d0d0;
  //}

  .slick-prev, .slick-next {
    visibility: hidden !important;
  }

  .slick-dots li {
    width: 30px;
    height: 3px;
    background: #d0d0d0;
  }

  .slick-dots button:before {
    width: 100%;
    content: '';
  }

  .slick-dots li.slick-active {
    background: #adadad;
    opacity: 1;
  }
`
export const FeedbackWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px 0;
  @media (max-width: 991px) {
    width: 60%;
    flex-direction: column;
  }

  span {
    color: #cfa167;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: .85rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, .5);
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, .5);
    overflow-wrap: break-word;
  }
`
