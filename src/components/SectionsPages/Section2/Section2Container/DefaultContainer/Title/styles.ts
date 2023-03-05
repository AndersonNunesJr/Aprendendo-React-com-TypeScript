import { pixelToRem } from "helpers/pixelToRem";
import styled from "styled-components";

export const Header2Box=styled.div`


display: flex;
gap: ${pixelToRem(20)};
flex: none;
order: 0;
flex-grow: 0;
flex-direction: row;
align-items: center;
margin:auto;
padding: 25px ;
width:870px;

@media(max-width:890px){
width:auto;
flex-direction: column;
gap: ${pixelToRem(5)};
}


.Title2 {


font: var(--font-Heading-H3);
letter-spacing: -0.02em;
background: linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
flex: none;
order:1;
width:495px;
padding-bottom: 10px;
font-size: ${pixelToRem(40)};

@media(max-width:890px){
font-size: ${pixelToRem(40)};
line-height: ${pixelToRem(39)};

}
@media(max-width:540px){
width:auto;
font-size:${pixelToRem(25)};
padding-bottom: 0px;
}
}
.SubTitle2{

order:2;
align-items: center;
font: var(--font-Subtitle-Lg) ;
color: var(--background-gray300);
font-size: medium;
width: 314px;



@media(max-width:890px){
width: fit-content;
font-size:${pixelToRem(15)};

}
}
`;