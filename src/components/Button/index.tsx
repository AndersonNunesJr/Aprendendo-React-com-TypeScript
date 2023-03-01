

import { ButtonComponent } from './style'

export interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
}

function Button({text, variant = 'primary'}:ButtonProps) {
  return (   
      <>
      <ButtonComponent variant={variant}>
        {text} 
        </ButtonComponent>
      </>    
  );
}


export default Button;
