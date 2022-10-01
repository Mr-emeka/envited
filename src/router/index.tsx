import {Router} from "@reach/router";
import React from "react";
import {Home, Event, Create} from "./export";


const Routes = () => {
  return (
    <React.Suspense fallback={<>Loading</>}>
      <Router>
        <Home path={"/"}/>
        <Event path={"/event"}/>
        <Create path={"/create"}/>
      </Router>

    </React.Suspense>
  )
}


export default Routes;
