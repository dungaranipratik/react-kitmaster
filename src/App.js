import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductContainer from "./components/product/ProductContainer";
import Form from "./components/form/Form";
import Video from "./components/video/Video";

class App extends React.Component {
  render() {
      return (
       <Router>
          <Route exact path="/" component={Form} />
          <Route exact path="/product" component={ProductContainer} />
          <Route exact path="/video" component={Video} />
       </Router>
      );
  }
}

export default App;
