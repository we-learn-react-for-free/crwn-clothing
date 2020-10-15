import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/component";
import ShopPage from "./pages/shop/component";

const NotFound = () => <h1>404 not found</h1>;

const TestRoute = (props) => {
  const { id } = props.match.params;
  console.log(id);
  return "hi";
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component= { ShopPage } />      
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
