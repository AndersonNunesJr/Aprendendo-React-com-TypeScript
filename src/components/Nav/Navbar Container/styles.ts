import styled from "styled-components";
import { pixelToRem } from 'helpers/pixelToRem';

export const NavbarContain = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding:25px 0px;
height: ${pixelToRem(69)};
border-radius: 0px;
border-bottom: 1px solid #151934;
flex: none;
order: 0;
flex-grow: 0;
box-sizing: border-box;
width: 100%;

@media(max-width:280px){

 height: ${pixelToRem(67)};

 }  
`;




