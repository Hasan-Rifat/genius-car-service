import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://limitless-lake-37617.herokuapp.com/service/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="add Service" />
      </form>
    </div>
  );
};

export default AddService;
