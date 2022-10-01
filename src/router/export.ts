import {lazy} from "react";


const Home = lazy(() => import("../components/pages/Home"));
const Create = lazy(() => import("../components/pages/Create"));
const Event = lazy(() => import("../components/pages/Event"));


export {
  Home,
  Event,
  Create
}
