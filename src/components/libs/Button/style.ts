import styled from 'styled-components';

import {ButtonHTMLAttributes, ReactElement, ReactNode} from "react";

export enum ButtonState {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonState;
  padding?: string;
  icon?: ReactElement;
  children: ReactNode;
  border_radius?: string;

  [key: string]: any;
}

export const Button = styled.button<ButtonProps>`
  font-family: "Work Sans";
  width: auto;
  display: flex;
  align-items: center;
  font-weight: 600;
  border-radius: ${(props) =>
  props.border_radius ? props.border_radius : props.theme.borderRadius.md};
  background: ${(props) => props.theme.buttonPalette[props.variant].background};
  color: ${(props) => props.theme.buttonPalette[props.variant].color};
  outline: none;
  padding: ${(props) => (props.padding ? props.padding : "")};
  border: none;
  cursor: pointer;
  justify-content:center;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  span:first-child {
    padding-right: 0.438rem;
  }
`;
