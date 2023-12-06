import React, { useState } from "react";

const Info = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
  });
  localStorage.setItem("user", JSON.stringify(info));
  const updateInfo = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="p-8 bg-[#1C1C24] border-2 border-gray-700 rounded-xl">
        <h1 className="text-neutral-50 text-3xl mt-6">Information</h1>
        {/* full name */}
        <div className="flex flex-col mt-8">
          <label htmlFor="full name" className="text-neutral-50 text-lg">
            {" "}
            Full Name
          </label>
          <input
            required
            name="name"
            value={info.name}
            onChange={updateInfo}
            placeholder="eg. jane Copper"
            type="text"
            className="mt-2 text-gray-300 w-[808px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]"
          />
        </div>
        {/* Email and Address */}
        <div className="flex flex-row gap-6 mt-8">
          <div className="flex flex-col">
            <label htmlFor="full name" className="text-neutral-50 text-lg">
              {" "}
              Email*
            </label>
            <input
              value={info.email}
              name="email"
              onChange={updateInfo}
              placeholder="eg. joshdoe1@gmail.com"
              type="text"
              className="mt-2 text-gray-300 w-[368px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="full name" className="text-neutral-50 text-lg">
              {" "}
              Address*
            </label>
            <input
              name="address"
              value={info.address}
              onChange={updateInfo}
              type="text"
              className="mt-2 text-gray-300 w-[368px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]"
            />
          </div>
        </div>
        {/* country and State */}
        <div className="flex flex-row gap-6 mt-8">
          <div className="flex flex-col">
            <label htmlFor="full name" className="text-neutral-50 text-lg">
              {" "}
              Country*
            </label>
            <input
              name="country"
              value={info.country}
              placeholder="Nepal"
              onChange={updateInfo}
              type="text"
              className="mt-2 text-gray-300 w-[368px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="full name" className="text-neutral-50 text-lg">
              {" "}
              State
            </label>
            <input
              name="state"
              value={info.state}
              onChange={updateInfo}
              type="text"
              className="mt-2 text-gray-300 w-[368px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]"
            />
          </div>
        </div>
        {/* city and zip code */}
        <div className="flex flex-row gap-6 mt-8">
          <div className="flex flex-col">
            <label htmlFor="full name" className="text-neutral-50 text-lg">
              {" "}
              City
            </label>
            <input
              name="city"
              value={info.city}
              onChange={updateInfo}
              type="text"
              className="mt-2 text-gray-300 w-[368px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="full name" className="text-neutral-50 text-lg">
              {" "}
              Zip/PostCode*
            </label>
            <input
              name="zip"
              value={info.zip}
              onChange={updateInfo}
              type="number"
              className="mt-2 text-gray-300 w-[368px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
