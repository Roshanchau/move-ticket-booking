import React from "react";

const Info = () => {
  return (
    <>
      <div className="p-8 bg-[#1C1C24]">
        <h1 className="text-neutral-50 text-3xl mt-6">Information</h1>
        {/* full name */}
        <div className="flex flex-col mt-8">
          <label htmlFor="full name" className="text-neutral-50 text-lg">
            {" "}
            Full Name
          </label>
          <input
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
            <select className="mt-2 text-gray-300 w-[368px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]" name="country" id="country" placeholder="Nepal">
              <option value="Nepal" selected="selected">Nepal</option>
              <option value="China">China</option>
              <option value="KoreAmerica">KoreAmerica</option>
              <option value="America">America</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="full name" className="text-neutral-50 text-lg">
              {" "}
              State
            </label>
            <input
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
              type="text"
              className="mt-2 text-gray-300 w-[368px] px-4 py-3 bg-[#1C1C24] rounded-md border-2 border-[#252D3C]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
