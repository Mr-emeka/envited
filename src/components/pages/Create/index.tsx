import {FC} from "react";
import Layout from "../../layout";
import {CreateContainer,} from "./style"
import {navigate, RouteComponentProps} from "@reach/router";
import Button from "../../libs/Button";
import {ButtonState} from "../../libs/Button/style";


export interface CreatePageProps extends RouteComponentProps {
};

const Create: FC<CreatePageProps> = () => {
  return <Layout bg="#F6F2FF" title="Create | envited.io" description={""}>
    <CreateContainer>
      <div>
        <h2>Create Event</h2>
        <p>enter event details</p>
        <div>
          <label>Event Name</label>
          <input/>
        </div>
        <div>
          <label>Host Name</label>
          <input/>
        </div>
        <div>
          <label>Event Photo</label>
          <input type={"file"} accept={"jpg,png"}/>
        </div>
        <div>
          <label>Location</label>
          <input/>
        </div>
        <div>
          <label>Date</label>
          <input type={"date"}/>
        </div>
        <Button variant={ButtonState.SECONDARY} padding={"16px 21px"} onClick={() => navigate(`/event`)}>
          Next
        </Button>

      </div>
    </CreateContainer>

  </Layout>
}


export default Create;
