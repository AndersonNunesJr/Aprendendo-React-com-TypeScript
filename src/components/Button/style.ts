import { ButtonProps } from "components/Button";
import { pixelToRem } from "helpers/pixelToRem";
import styled, {css} from "styled-components";

export const ButtonComponent = styled.button<Partial<ButtonProps>>`
    
    padding-left: ${pixelToRem(36)};
    padding-right: ${pixelToRem(36)};
    height: ${pixelToRem(46)};
    border: none;
    border-radius: ${pixelToRem(46)};
    color: var(--font);
    position: relative;
    @media(max-width:500px){
      width: min-content;
    }
    
    ${({variant}) => variant === 'primary' && css`
        background: var(--violet);
    `};

    ${({variant}) => variant === 'secondary' && css`
    background: linear-gradient(261.47deg, rgba(21, 25, 52, 0.52) 14.6%, rgba(21, 25, 52, 0.08) 49.66%, rgba(21, 25, 52, 0.49) 87.77%);
    border: 1.2px solid #282D45;
    border-radius: 46px;
    `};
`;