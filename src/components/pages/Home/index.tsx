import {FC} from "react";
import Layout from "../../layout";
import {HomeContainer, ImagePlace, TextArea} from "./style"
import img from "../../../assets/img/img-lg.png"
import {navigate, RouteComponentProps} from "@reach/router";
import Button from "../../libs/Button";
import {ButtonState} from "../../libs/Button/style";


export interface HomeProps extends RouteComponentProps {
};

const Home: FC<HomeProps> = () => {
  return <Layout bg="#F6F2FF" title="Home | envited.io" description={""}>
    <HomeContainer>
      <TextArea>
        <h2>Imagine if
          <br/>
          <span>Snapchat </span>
          <br/>
          had events.</h2>
        <p>Easily host and share events with your friends across any social media.</p>

        <Button variant={ButtonState.SECONDARY} padding={"16px 21px"} onClick={() => navigate(`/create`)}>
          🎉 Create my event
        </Button>

      </TextArea>
      {/*Image place*/}
      <ImagePlace>
        <img src={img} alt={"home"}/>

        <Button variant={ButtonState.SECONDARY} padding={"16px 21px"} onClick={() => navigate(`/create`)}>
          🎉 Create my event
        </Button>
      </ImagePlace>
    </HomeContainer>

  </Layout>
}


export default Home;
