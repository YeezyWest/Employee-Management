import React from "react";
import Success from "./Success";
import Bug from "./Bug";
import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateUserForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("dont't have Data");
    console.log(formData);
  };

  if (Object.keys(formData).length > 0)
    return <Success message={"Data Added"} />;

  return (
    <div>
      <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            type="text"
            name="firstname"
            placeholder="FirstName"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            type="text"
            name="lasttname"
            placeholder="LastName"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            type="text"
            name="salary"
            placeholder="Salary"
          />
        </div>
        <div className="input-type">
          <input
            onChange={setFormData}
            className="border px-5 py-3 focus:outline-none rounded-md"
            type="date"
            name="date"
            placeholder="Date"
          />
        </div>

        <div className="flex gap-10 items-center">
          <div className="form-check">
            <input
              onChange={setFormData}
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="status"
              value="Active"
              id="radioDefault1"
            />
            <label
              htmlFor="radioDefault1"
              className="inline-block text-gray-800"
            >
              Active
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={setFormData}
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="status"
              value="Inactive"
              id="radioDefault2"
            />
            <label
              htmlFor="radioDefault2"
              className="inline-block text-gray-800"
            >
              Inactive
            </label>
          </div>
        </div>

        <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
          Add{" "}
          <span className="px-1">
            {" "}
            <BiPlus size={24} />{" "}
          </span>
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
