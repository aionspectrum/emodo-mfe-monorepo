import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
  background-color: #0095ff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const ButtonSecondary = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  emphasis?: string;
}

const Button: FC<ButtonProps> = ({ emphasis, ...props }) => {
  switch (emphasis) {
    case 'primary':
      return <ButtonPrimary {...props} />;
    case 'secondary':
      return <ButtonSecondary {...props} />;
    default:
      return <ButtonSecondary {...props} />;
  }
};

export default Button;
