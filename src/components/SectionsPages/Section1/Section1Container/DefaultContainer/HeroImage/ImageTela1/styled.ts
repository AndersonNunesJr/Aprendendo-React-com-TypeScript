import styled from "styled-components";

export const HeaderTela1 = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  background: none;
  order: 0;
  border-bottom: 2px solid var(--background-gray500);
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;

  .cabeçalho {
    display: flex;
    background: none;
    order: 1;
    padding: 15px 0px 10px 0px;
    position: relative;
    gap: 10px;

    @media (max-width: 781px) {
      width: auto;
    }

    .h1 {
      font-family: var(--font-Heading-H6);
      letter-spacing: 0.03em;
      color: var(--background-white200);
      background: none;
      flex-direction: column;
      @media (max-width: 781px) {
        width: auto;
        font-size: 70.75%;
        -webkit-text-size-adjust: 100%;
      }

      .subtitle {
        font-family: var(--font-Subtitle-Rg);
        color: var(--background-gray300);
        background: none;

        @media (max-width: 781px) {
          width: auto;
        }
      }
    }
    .Avatar {
      background: none;
      order: 0;
      position: inherit;

      @media (max-width: 781px) {
        width: auto;
      }
    }
  }

  .Calendario {
    display: flex;
    position: relative;
    background: none;
    order: 3;
    padding: 7px 12px;
    font-family: var(--font-Paragraph-Sm);
    color: var(--background-white200);
    border: 2px solid var(--background-gray500);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media (max-width: 781px) {
      font-size: 73.75%;
      -webkit-text-size-adjust: 100%;
    }

    .img-0 {
      background: none;
    }
    .img-1 {
      background: none;
    }
  }
`;

export const Boxes = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  background: none;
  padding: 40px 17px;
  justify-content: space-between;
  
   
  @media(max-width:575px){
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: min-content;
  }
 

  .box-1 {
    width: auto;
    border-radius: 5px;
    order: 0;

    @media (max-width: 781px) {
      font-size: 73.75%;
      -webkit-text-size-adjust: 100%;
    }

    @media(max-width:575px){
      width: 100%;
    }
    
    .box-1-img{
    padding:10px 0px 0px 20px;

    }

    .box-1-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px 10px;
      

      .box-1-title {
        color: var(--background-white200);
        font-family: var(--font-Caption-Rg);
        padding-right:5px;
      }
      .box-1-Percentage {
          
          font-family: var(--font-Caption-Rg);
          color: var(--Success);
          background-color: var(--background-gray600);
          border-radius: 8px;
        }
    }

    .box-1-info{
       
       flex-direction: column;
       display: flex;
       width: 100%;
       position: relative;
       font-family: var(--font-Button-Rg);
       color: var(--background-white200);
       padding:5px 0px 10px 0px;
       font-size: 24px;
       line-height: 32px;
       letter-spacing: -0.03em;
    }
     
  }

  .box-2 {
    border-radius: 5px;
    width: auto;
    order: 1;
    
    @media (max-width: 781px) {
      font-size: 73.75%;
      -webkit-text-size-adjust: 100%;
      
    }
    @media(max-width:575px){
      width: 100%;
    }

    .box-2-img{
    padding:10px 0px 0px 20px;

    }

    .box-2-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px 10px;

      .box-2-title {
        color: var(--background-white200);
        font-family: var(--font-Caption-Rg);
        padding-right:5px;
      }
      .box-2-Percentage {
          
          font-family: var(--font-Caption-Rg);
          color: var(--Success);
          background-color: var(--background-gray600);
          border-radius: 8px;
        }
    }

    .box-2-info{
       
       flex-direction: column;
       display: flex;
       width: 100%;
       position: relative;
       font-family: var(--font-Button-Rg);
       color: var(--background-white200);
       padding:5px 0px 10px 0px;
       font-size: 24px;
       line-height: 32px;
       letter-spacing: -0.03em;
    }
  }
  .box-3 {
    border-radius: 5px;
    width: auto;
    order: 2;

    @media (max-width: 781px) {
      font-size: 73.75%;
      -webkit-text-size-adjust: 100%;
    }

    @media(max-width:575px){
      width: 100%;
    }
    .box-3-img{
    padding:10px 0px 0px 20px;

    }

    .box-3-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px 10px;

      .box-3-title {
        color: var(--background-white200);
        font-family: var(--font-Caption-Rg);
        padding-right:5px;
      }
      .box-3-Percentage {
          
          font-family: var(--font-Caption-Rg);
          color: var(--Error);
          background-color: var(--background-gray600);
          border-radius: 8px;
        }
    }

    .box-3-info{
       
       flex-direction: column;
       display: flex;
       width: 100%;
       position: relative;
       font-family: var(--font-Button-Rg);
       color: var(--background-white200);
       padding:5px 0px 10px 0px;
       font-size: 24px;
       line-height: 32px;
       letter-spacing: -0.03em;
    }
  }
  .box-4 {
    border-radius: 5px;
    width: auto;
    order: 3;

    @media (max-width: 781px) {
      font-size: 73.75%;
      -webkit-text-size-adjust: 100%;
    }
    @media(max-width:575px){
      width: 100%;
      flex-wrap: wrap;
      
    }

    .box-4-img{
    padding:10px 0px 0px 20px;

    }

    .box-4-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8px 10px;

      .box-4-title {
        color: var(--background-white200);
        font-family: var(--font-Caption-Rg);
        padding-right:5px;
      }
      .box-4-Percentage {
          
          font-family: var(--font-Caption-Rg);
          color: var(--Success);
          background-color: var(--background-gray600);
          border-radius: 8px;
        }
    }

    .box-4-info{
       
       flex-direction: column;
       display: flex;
       width: 100%;
       position: relative;
       font-family: var(--font-Button-Rg);
       color: var(--background-white200);
       padding:5px 0px 10px 0px;
       font-size: 24px;
       line-height: 32px;
       letter-spacing: -0.03em;
    }
  }
`;

export const Grafico = styled.div`
  margin: 0%;
  display: flex;
  border-radius: 5px;
  background: none;
  width: 100%;
  background-image: url('./images/Group 22.svg') ;
 `;