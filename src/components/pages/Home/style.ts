import styled from "styled-components";
import {device} from "../../../helpers";

export const HomeContainer = styled.div`
  padding: 90px 46px;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    padding:0;
  }
`


export const TextArea = styled.div`
  text-align: center;
  
  
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
    
    & > span {
      background: linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
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
      text-align: right;
    }
  }
  
  & > button {
     margin: 0 0 0 auto;
     display: none;
     @media ${device.laptop} {
      display: block;
      width: 320px;
      padding: 16px 70px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      /* identical to box height */
       
      color: #FFFFFF;
    }
  }
`

export const ImagePlace = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
  & > img {
    width: 165.63px;
    height: 292px;
    object-fit: contain;
    @media ${device.tablet} {  
      width: 311px;
      height: 548.27px;
    }
    
    @media ${device.laptop} {
      width: 440px;
      height: 775.69px;
    }
  }
  & > button{
    width: 187px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    /* identical to box height */
       
    color: #FFFFFF;
    
    @media ${device.tablet} {  
      width: 320px;
      padding: 16px 70px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      /* identical to box height */
       
      color: #FFFFFF;
    }
    @media ${device.laptop} {
      display:none;
    }
  }
`;
