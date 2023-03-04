import styled from "styled-components";
import { pixelToRem } from 'helpers/pixelToRem';


export const Header = styled.div`

position: relative;
left:0%;
right:0%;
top:0%;
bottom: auto;
padding: 25px 24px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
width:auto;
height: ${pixelToRem(96)};
border-bottom: 1px solid #151934;
border-radius: 0px;
flex: none;
order: 0;
flex-grow: 0;

`;