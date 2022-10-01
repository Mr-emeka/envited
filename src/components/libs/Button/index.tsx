import {Button as ButtonStyle, ButtonProps} from "./style";
import {FC} from "react";

const Button: FC<ButtonProps> = (props) => {
  return <ButtonStyle {...props}>
    {props.icon ? <span>{props.icon}</span> : ""}
    {props.children}
  </ButtonStyle>
}


export default Button;
