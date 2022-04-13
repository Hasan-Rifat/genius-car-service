import React from "react";
import img from '../../images/404.jpg'
const NotFound = () => {
  return (
    <div>
        <h2 className="text-center text-primary">Mechanic is sleeping</h2>
      <img src={img} className='w-100' alt="" />
    </div>
  );
};

export default NotFound;
