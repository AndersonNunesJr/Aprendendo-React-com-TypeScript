import { ButtonProps } from "components/Button";
import { pixelToRem } from "helpers/pixelToRem";
import styled, {css} from "styled-components";

export const ButtonComponent = styled.button<Partial<ButtonProps>>`
    background: var(--violet);
    width: ${pixelToRem(135)};
    height: ${pixelToRem(46)};
    border: none;
    border-radius: ${pixelToRem(46)};
    color: var(--font);
    position: relative;
   

    ${({variant}) => variant === 'primary' && css`
        background-color: green;
    `};

    ${({variant}) => variant === 'secondary' && css`
        background-color: red;
    `};
`;