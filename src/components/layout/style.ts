import styled from "styled-components";

interface MainProps {
  bg: string
}

export const Main = styled.main<MainProps>`
  background: ${props => props.bg};
  min-height: 100vh;
`
