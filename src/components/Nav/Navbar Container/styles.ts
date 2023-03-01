import styled from "styled-components";
import { pixelToRem } from 'helpers/pixelToRem';

export const NavbarContain = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items:initial;
padding: 0px;
width: ${pixelToRem(900)};
height: ${pixelToRem(46)};
border-radius: 0px;
flex: none;
order: 0;
flex-grow: 0;
position: relative;
margin: auto;
`;