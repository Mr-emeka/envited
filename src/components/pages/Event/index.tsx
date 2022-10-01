import {FC} from "react";
import Layout from "../../layout";
import {EventContainer, EventImageArea} from "./style";
import {RouteComponentProps} from "@reach/router";
import eventImage from "../../../assets/img/birthday-img.png";
import Tag from "../../libs/Tags";
import Details from "../../libs/Details";

export interface EventProps extends RouteComponentProps {
};

const Event: FC<EventProps> = () => {
  return <Layout bg="#FBFAFF" title="Event | envited.io" description={""}>
    <EventContainer>
      <EventImageArea>
        <img src={eventImage} loading="lazy" alt={"event"}/>
      </EventImageArea>

      <div>
        <Tag/>
        <Details/>

      </div>
    </EventContainer>

  </Layout>
}


export default Event;


