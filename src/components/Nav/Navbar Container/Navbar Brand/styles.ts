import styled from "styled-components";
import { pixelToRem } from 'helpers/pixelToRem';


export const Logo = styled.image`
position: relative;
display: flex;
background-color: var(--background-black1000);
width: ${pixelToRem(159)};
height: ${pixelToRem(39)};
background-image: url('./images/NavbarBrand.svg') ;
order: 1;
@media(max-width:300px){
      height: ${pixelToRem(43)};
      width: ${pixelToRem(55)};
      background-image: url('./images/NavbarBrandsmall.svg');
    }
`;
