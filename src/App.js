import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/component";
import HomePage from "./pages/homepage/component";
import ShopPage from "./pages/shop/component";

const NotFound = () => <h1>404 not found</h1>;


const App = () => {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component= { ShopPage } />      
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
