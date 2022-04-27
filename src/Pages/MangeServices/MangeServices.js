import React from "react";
import useService from "../../Hooks/useServices";

const MangeServices = () => {
  const [services, setServices] = useService();

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("are you sure you want to delete?");
    if (proceed) {
      const url = `https://limitless-lake-37617.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const reminding = services.filter((service) => service._id !== id);
          setServices(reminding);
        });
    }
  };

  return (
    <div>
      <h2>manage</h2>
      {services.map((service) => (
        <div className="w-50 mx-auto" key={service._id}>
          <h5>
            {service._id}{" "}
            <button onClick={() => handleDelete(service._id)}>x</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default MangeServices;
