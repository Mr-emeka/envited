import styled  from "styled-components";


export const DetailsStyle = styled.div`
  width: fit-content;
  width:100%;
  margin-top: 65px;
`

export const ItemStyle = styled.div`
  margin-bottom: 33px;
  display: flex;
  justify-content: space-between;
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    
    & > div {
      & > h6 {
        max-width: 138px;
        
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        
        color: #240D57;
      }
      & > span {
        max-width: 197px;
        
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height */
        
        
        color: #4F4F4F;
      }
    }
  }
  
  & > div:nth-child(2){
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;


export const IconPlace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 1px;
  
  width: 48px;
  height: 48px;
  
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 20px;

`;
