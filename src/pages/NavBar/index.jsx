import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Users from "../Users";
import Posts from "../Posts";
import Contact from "../Contact";

const NavBarnpm = () => {
  return (
    <Router>
      <div className="flex justify-between bg-gray-500 h-14 items-center">
        <div className="text-red-300 font-bold text-2xl px-4">
          React Router Demo
        </div>
        <div className="space-x-4 mr-4">
          <Link to="/">
            <span className="text-white">Users</span>
          </Link>

          <Link to="/posts">
            <span className="text-white">Posts</span>
          </Link>

          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
};

export default NavBarnpm;
