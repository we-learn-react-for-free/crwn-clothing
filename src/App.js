import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/component";
import { auth } from "./firebase/firebase.utils";
import HomePage from "./pages/homepage/component";
import ShopPage from "./pages/shop/component";
import SignInAndSignUpPage from "./pages/sign-in-out/component";

const NotFound = () => <h1>404 not found</h1>;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <React.Fragment>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInAndSignUpPage} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
