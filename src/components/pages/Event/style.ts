import styled from "styled-components";
import {device} from "../../../helpers";


export const EventContainer = styled.div`
  @media ${device.tablet} {
    padding: 88px 184px;
  }
  
  @media ${device.laptop}{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    padding: 184px 0;
  }
  & > div:nth-child(2){
    padding: 11px 20px;
  }
  
`;


export const EventImageArea = styled.div`
  & > img {
    width: 100%;
    min-width: 375px;
    height: 375px;
    object-fit: contain;
    @media ${device.tablet} {
      width: 593px;
      height: 593px;
    }
    
    @media ${device.laptop}{
      width: 500px;
      height: 500px;
    }
  }
`;

