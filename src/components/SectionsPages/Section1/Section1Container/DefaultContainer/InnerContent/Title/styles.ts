import styled from "styled-components";
import { pixelToRem } from "helpers/pixelToRem";



export const Title1 = styled.div`

margin: auto;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 0px;
gap: ${pixelToRem(35)};
flex: none;
order: 0;
flex-grow: 0;
padding-bottom:25px;



`;

export const TitleWeb = styled.div`



font: var(--font-Heading-H1);
line-height: ${pixelToRem(72)};
text-align: center;
letter-spacing: -0.02em;
background: linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
flex: none;
order: 1;
flex-grow: 0;
padding-top: 25px;
padding-bottom:10px;


 @media(max-width:600px){


font-size: ${pixelToRem(41)};
line-height: ${pixelToRem(39)};
text-align: center;
letter-spacing: -0.02em;
background: linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

 }

 @media(max-width:330px){

line-height: ${pixelToRem(39)};
text-align: center;
letter-spacing: -0.02em;
background: linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
width: auto;
 }

`;

export const SubTitle = styled.div`

padding: 0px 15px 15px;
font: var(--font-Subtitle-Lg) ;
font-size: 18px;
line-height: 26px;
text-align: center;
color: var(--background-gray300);
flex: none;
order: 2;
flex-grow: 0;

   
@media(min-width: 800px){
        
      width: ${pixelToRem(830)};
    
    }
 @media(max-width:799px){
    
    font-size: 93.75%;
    -webkit-text-size-adjust: 100%;
 }

`;