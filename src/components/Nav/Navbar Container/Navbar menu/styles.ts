import styled from "styled-components";
import  { pixelToRem } from  'helpers/pixelToRem';
  


export const N = styled.div`
    
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px ;
  gap: 15px;
  width: auto;
  height: ${pixelToRem(46)};
  flex: none;
  order: 2;
  flex-grow: 0;

  @media(max-width: 630px){
    display: none;
  }
        

    .Home {
      background-color: var(--background-black1000);
      border: none;
      color: var(--background-gray300);
      font-family: var(--font-Heading-H1);
       
    }
  
    .About {
      background-color: var(--background-black1000);
      border: none;
      color: var(--background-gray300);
      font-family: var(--font-Heading-H1);
     
    }
    .Features {
      background-color: var(--background-black1000);
      border: none;
      color: var(--background-gray300);
      font-family: var(--font-Heading-H1);
      
    }
    .Pricing {
      background-color: var(--background-black1000);
      border: none;
      color: var(--background-gray300);
      font-family: var(--font-Heading-H1);
      
    }
    .Blog {
      background-color: var(--background-black1000);
      border: none;
      color: var(--background-gray300);
      font-family: var(--font-Heading-H1);
      
    }
  
  `;