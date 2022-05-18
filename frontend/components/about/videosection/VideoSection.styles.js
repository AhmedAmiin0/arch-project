import styled, {css} from "styled-components";
import {devices} from "../../layout/GlobalStyle ";

export const VideoSectionStyles = styled.section`
  margin-bottom: 120px;
  position: relative;
  background-color: #3b0f62;
  width: 100%;
  height: 60vh;
  color: #fff;
  font-size: 2.5rem;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 100%);
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 100%);
  }
`
export const VideoThumbnail = styled.div`
  background: url(${props => props.background}) no-repeat center center fixed;
  height: 100%;
  opacity: .7;
`
export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 24px;
  border-radius: 96px;
  border: 1px solid #fff;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  z-index: 5;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    padding: 26px;
    border-color: #9b949e
  }
`
export const VideoOverlay = styled.div`
  transition-duration: 366ms;
  height: 100%;
  left: 0;
  outline: none;
  position: fixed;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  transform: translateZ(0);
  width: 100%;
  z-index: 99992;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(.47, 0, .74, .71);
  //background: rgba(30, 30, 30, 0.9);
`

export const VideoContainer = styled.div`
  z-index: 6;
  height: 60%;
  width: 100%;
  position: relative;
  @media ${devices.laptop} {
    margin: 100px;
    height: 100%;
    padding: 100px;
  }
`
export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`
export const VideoBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background: #1e1e1e;
  transition-duration: inherit;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(.47, 0, .74, .71);
  ${props => props.isPlaying && css`
    transition-timing-function: cubic-bezier(.22, .61, .36, 1);
    opacity: .9;
  `}
`
