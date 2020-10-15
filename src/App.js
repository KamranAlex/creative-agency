import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Dashboard/UserDash/Order/Order";
import MyServices from "./components/Dashboard/UserDash/MyServices/MyServices";
import AddServices from "./components/Dashboard/AdminDash/AddService/AddServices";
import { createContext } from "react";
import Review from "./components/Dashboard/UserDash/Review/Review";
import MakeAdmin from "./components/Dashboard/AdminDash/MakeAdmin/MakeAdmin";
import ServiceList from "./components/Dashboard/AdminDash/ServiceList/ServiceList";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
          <PrivateRoute path='/dashboard/order/:id'>
            <Order></Order>
          </PrivateRoute>
          <Route path='/dashboard/myServices'>
            <MyServices></MyServices>
          </Route>
          <Route path='/dashboard/review'>
            <Review></Review>
          </Route>
          <Route path='/dashboard/addService'>
            <AddServices></AddServices>
          </Route>
          <Route path='/dashboard/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path='/dashboard/serviceList'>
            <ServiceList></ServiceList>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
