import React from "react";

const OrderdServices = ({ order }) => {
  let orderStatus = "";
  let statusColor = "";
  if (order.status === "pending") {
    orderStatus = "Pending";
    statusColor = "#FF4545";
  }
  if (order.status === "ongoing") {
    orderStatus = "OnGoing";
    statusColor = "#FFBD3E";
  }
  if (order.status === "complete") {
    orderStatus = "Complete";
    statusColor = "#009444";
  }

  return (
    <div className='col-md-6 mt-3'>
      <div className='myService-card px-3 py-2'>
        <div className='card-intro d-flex justify-content-between'>
          <img
            src={`data:image/png;base64,${order.image.img}`}
            alt=''
            style={{ height: "60px" }}
          />
          <strong
            className='myService-status mr-2'
            style={{ color: statusColor }}
          >
            {orderStatus}
          </strong>
        </div>
        <div className='card-details mt-2'>
          <h6>{order.project}</h6>
          <p>{order.details}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderdServices;
