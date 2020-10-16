import React, { useContext } from "react";
import { UserContext } from "../../../App";
import ServiceList from "../AdminDash/ServiceList/ServiceList";
import MyServices from "../UserDash/MyServices/MyServices";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div>
      {loggedInUser.isAdmin ? (
        <ServiceList></ServiceList>
      ) : (
        <MyServices></MyServices>
      )}
    </div>
  );
};

export default Dashboard;
