import {ReactNode, FC, ReactElement} from "react";
import SEO from "../libs/Seo";
import {Main} from "./style"

interface LayoutProps {
  bg: string;
  description: string;
  title: string;
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({bg, title, description, children}): ReactElement => {
  return <>
    <SEO title={title} description={description}/>
    <Main bg={bg}>
      {children}
    </Main>
  </>

}


export default Layout;
