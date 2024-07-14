/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const Add = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");

  const { setTableData } = props;

  const handleSubmit = async () => {
    if (name && age && height && gender && profession) {
      const obj = {
        name: name,
        age: age,
        height: height,
        gender: gender,
        profession: profession,
        createdAt: new Date(),
      };

      try {
        const response = await axios.post(
          "http://localhost:3001/api/create",
          obj
        );

        if (response.status === 200 || response.status === 201) {
          console.log("Server response:", response.data);
          setTableData((prev) => [...prev, obj]);
        } else {
          console.error("Failed to submit data");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setName("");
      setAge("");
      setHeight("");
      setGender("");
      setProfession("");
    }
  };

  return (
    <div className="mx-auto w-full max-w-fit p-4 bg-green-200 rounded-lg">
      <h1 className="text-center sm:text-3xl text-xl text-green-600 mb-4">
        Add
      </h1>
      <div className="flex space-y-3 flex-col sm:w-[40vh]">
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="border-1 text-green-600 border-green-600 px-2 py-1 focus:outline-none rounded-md bg-green-50"
        />
        <input
          value={age}
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          className="border-1 text-green-600 border-green-600 px-2 py-1 focus:outline-none rounded-md bg-green-50"
        />
        <input
          value={height}
          type="number"
          placeholder="Height"
          onChange={(e) => setHeight(e.target.value)}
          className="border-1 text-green-600 border-green-600 px-2 py-1 focus:outline-none rounded-md bg-green-50"
        />
        <input
          value={gender}
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
          className="border-1 text-green-600 border-green-600 px-2 py-1 focus:outline-none rounded-md bg-green-50"
        />
        <input
          value={profession}
          type="text"
          placeholder="Profession"
          onChange={(e) => setProfession(e.target.value)}
          className="border-1 text-green-600 border-green-600 px-2 py-1 focus:outline-none rounded-md bg-green-50"
        />
        <button
          onClick={handleSubmit}
          className="p-1 border-green-600 rounded-md hover:text-green-600 text-green-100 hover:bg-green-100 transition bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Add;
