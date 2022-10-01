import {ItemStyle, IconPlace} from "./style";
import {CaretRight} from "../../../assets/svg";
import {FC, ReactElement} from "react";


interface ItemProps {
  icon: ReactElement,
  heading: string
  description: string
}

const Item: FC<ItemProps> = ({icon, heading, description}) => {
  return <ItemStyle>
    {/**/}
    <div>
      <IconPlace>
        {icon}
      </IconPlace>
      <div>
        <h6>{heading}</h6>
        <span>{description}</span>
      </div>
    </div>
    {/* icon */}
    <div>
      <CaretRight/>
    </div>
  </ItemStyle>
}


export default Item;
