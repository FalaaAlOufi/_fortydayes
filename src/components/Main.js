import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import contact from "./contact";
import programs from "./programs";
import addtask from "./addtask";
import prof from "./prof";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={contact} />
      <Route path="/programs" component={programs} />
      <Route path="/addtask" component={addtask} />
      <Route path="/prof" component={prof} />
    </Switch>
  </main>
);
export default Main;
