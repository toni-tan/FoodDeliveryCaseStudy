import React from "react";
import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import OrderList from "./components/orderlist";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div className="flex-container">
      <div>
        <aside className="sidebar">
          <nav className="nav">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  <i className="fas fa-utensils" />
                  Food
                </NavLink>
              </li>
              <li>
                <NavLink to="/orders" activeClassName="active">
                  Orders
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <Route exact path="/" component={App} />
      <Route path="/orders" component={OrderList} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
