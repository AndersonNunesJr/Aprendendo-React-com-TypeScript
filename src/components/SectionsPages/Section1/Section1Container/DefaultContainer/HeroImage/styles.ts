import { pixelToRem } from "helpers/pixelToRem";
import styled from "styled-components";

export const ImageHero = styled.div`
  /* Rectangle 7 */

  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  flex: none;
  box-sizing: border-box;
  position: relative;
  width: ${pixelToRem(808)};
  background: var(--background-gray800);
  border: 1px solid var(--background-gray500);
  border-radius: 6px;
  border-top: 0px;
  padding-bottom: 15px;

  @media (max-width: 781px) {
    width: 90%;
    height: 90%;
    margin: auto;
  }

  .home {
    display: flex;
    border: none;
    width: ${pixelToRem(808)};
    padding-bottom: 15px;
    background: none;

    @media (max-width: 781px) {
      width: auto;
    }
  }

  .image25 {
    background: none;

    @media (max-width: 781px) {
      width: 100%;
      height: 100%;
      padding: 0px 5px 0px 5px;
    }
  }
`;
