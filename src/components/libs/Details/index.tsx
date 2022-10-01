import {DetailsStyle} from "./style";
import Item from "./Item";
import {Calendar, Location} from "../../../assets/svg";


const data = [{
  icon: <Location/>,
  heading: 'Hello',
  description: 'asdasdsdsad'

}, {
  icon: <Calendar/>,
  heading: 'hello',
  description: 'adsaddas'

}]
const Details = () => {
  return <DetailsStyle>
    {data.map(({icon, heading, description}) => {
      return <Item icon={icon} heading={heading} description={description}/>
    })}

  </DetailsStyle>
}


export default Details;


