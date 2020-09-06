import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 20px;
  border: none;
  margin: 20px;
  border-radius: 13px;
  color: #fff;
  background: #536dfe;
`;

interface Props {
  children: any;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'warning' | 'danger' | 'default';
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  type = 'default',
}: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
