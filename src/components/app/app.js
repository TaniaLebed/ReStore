import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.css";
import { HomePage, CartPage, BookPage } from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path="/re-store/" component={HomePage} exact />
        <Route path="/re-store/cart" component={CartPage} exact />
        <Route path="/re-store/book" component={BookPage} exact />
      </Switch>
    </main>
  );
};

export default App;
