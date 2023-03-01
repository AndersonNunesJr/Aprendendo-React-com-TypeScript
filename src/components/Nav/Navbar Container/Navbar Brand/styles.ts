import styled from "styled-components";
import { pixelToRem } from 'helpers/pixelToRem';


export const Logo = styled.image`
position: relative;
display: flex;
background-color: var(--background-black1000);
width: ${pixelToRem(158)};
height: ${pixelToRem(39)};
background-image: url('./images/NavbarBrand.svg') ;

`;
