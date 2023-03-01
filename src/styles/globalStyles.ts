import { createGlobalStyle } from "styled-components";
import { pixelToRem } from '../helpers/pixelToRem';



export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
   
   
}

html{
    @media(max-width: 1920px){
        font-size: 93.75%;
    }
    @media(max-width: 280px){
         font-size: 87.5%;
         -webkit-text-size-adjust: 100%;
    }
}

body{
   font-family: "satoshi", sans-serif;
   font-family: "inter", sans-serif;
   -webkit-font-smoothing: antialiased ;
}

:root{
   
    /* colors.*/
    
    --background-black1000: #060B27;
    --background-gray800: #0E1330; 
    --background-gray600: #151934;
    --background-gray500: #282D45;
    --background-gray400: #47507A;
    --background-gray300: #8F9BB7;
    --background-white200: #F6F6F7;
    --background-white: #ffffff;
    --font:#ffffff;
    
    //*Primary-colors*//
    --violet: #7214FF;
      
    //*Secundary-colors*//
    --Medium-orchid: #B756FE;
    --green-water: #32CAFD;
    --Hot-Pink: #DF2DB1;
    --Radical-Red: #FF334B;
    --Neon-Blue: #2D55FB;

     //*Alert-colors*//
    --Success-Green: #41E88D;
    --Warning-Yellow: #FFC933;
    --Error-Red: #F6285F;    


   
        //*Fonts*//

        //*Heading*//

        --font-Heading-H1: 700 ${pixelToRem(72)}/${pixelToRem(64)} "satoshi", sans-serif;

        --font-Heading-H2: 700 ${pixelToRem(64)}/${pixelToRem(56)} "satoshi", sans-serif;

        --font-Heading-H3: 700 ${pixelToRem(56)}/${pixelToRem(48)} "satoshi", sans-serif;

        --font-Heading-H4: 700 ${pixelToRem(48)}/${pixelToRem(40)} "satoshi", sans-serif;

        --font-Heading-H5: 700 ${pixelToRem(40)}/${pixelToRem(32)} "satoshi", sans-serif;

        --font-Heading-H6: 700 ${pixelToRem(32)}/${pixelToRem(24)} "satoshi", sans-serif;

        //*Subtitle*//

        --font-Subtitle-Lg: 400 ${pixelToRem(26)}/${pixelToRem(18)} "inter", sans-serif;

        --font-Subtitle-Rg: 400 ${pixelToRem(24)}/${pixelToRem(16)} "inter", sans-serif;

        //*Paragraph*//

        --font-Paragraph-Md: 400 ${pixelToRem(26)}/${pixelToRem(18)} "inter", sans-serif;

        --font-Paragraph-Rg: 400 ${pixelToRem(24)}/${pixelToRem(16)} "inter", sans-serif;

        --font-Paragraph-Sm: 400 ${pixelToRem(22)}/${pixelToRem(14)} "inter", sans-serif;

        //*Button*//

        --font-Button-Rg: 500 ${pixelToRem(16)}/${pixelToRem(16)} "satoshi", sans-serif;

        //*Caption*//

        --font-Caption-Rg: 400 ${pixelToRem(20)}/${pixelToRem(12)} "inter", sans-serif;

        //*Fonts*//

       
}
`;
