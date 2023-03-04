import styled from "styled-components";




export const TitleButton = styled.div`

/* Button */


/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding-top:0px;
gap: 30px;


    @media(max-width:479px){
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    grid-row-gap: 20px;
    text-align: center;
}

/* Inside auto layout */

flex: none;
order: 3;
flex-grow: 0;


`;