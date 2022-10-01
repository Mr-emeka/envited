import styled from "styled-components";
import {device} from "../../../helpers";


export const CreateContainer = styled.div`
  padding: 90px 46px;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    padding:0;
  }
  
  & > div{
    & > h2 {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 41px;
      /* or 100% */
      
      @media ${device.laptop} {
        font-size: 64px;
        line-height: 64px; 
        text-align:right;
      }
      
      
      color: #240D57;
      margin-bottom: 16px;
   }
   
   & > p {
      margin:0;
      margin-bottom: 52px;
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      
      color: #4F4F4F;
      
      @media ${device.laptop} {
        font-size: 24px;
        line-height: 28px;
        max-width: 521px;
      }
   }
   
   & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    
    & > input {
      border: #4F4F4F;
      width: 100%;
      padding: 0.688rem 0.813rem;
      margin-top: .5rem;
    }
    
    & > label{
      font-size: ${(props) => props.theme.fontSize["h3"].fontSize};
      line-height: ${(props) => props.theme.fontSize["h3"].lineHeight};
    }
   }
   
  }
`


