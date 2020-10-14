import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Dashboard/UserDash/Order/Order";
import MyServices from "./components/Dashboard/UserDash/MyServices/MyServices";
import AddServices from "./components/Dashboard/AdminDash/AddService/AddServices";
import { createContext } from "react";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/dashboard/order/:id'>
            <Order></Order>
          </Route>

          <Route path='/dashboard/myServices'>
            <MyServices></MyServices>
          </Route>
          <Route path='/dashboard/addService'>
            <AddServices></AddServices>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
