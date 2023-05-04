import React from "react";

const addPaper = () => {
  return (
    <section className="pt-32 container w-[90%] sm:max-w-4xl mx-auto">
      <form className="py-5 px-3 border-indigo-300 rounded-md shadow-md">
        <h4 className="text-xl text-center font-semibold text-[#252525]">
          Add New Paper
        </h4>
        <div className="flex items-center flex-col mt-5 gap-x-3 md:flex-row">
          <input
            type={"text"}
            placeholder="Title"
            className="outline-none my-2 md:my-0 w-full border border-indigo-300 rounded-md px-2 h-[45px]"
          />
          <input
            type={"text"}
            placeholder="Hashtag"
            className="outline-none my-2 md:my-0 w-full border border-indigo-300 rounded-md px-2 h-[45px]"
          />
        </div>
        <div className="my-3">
          <textarea
            placeholder="Message"
            className="outline-none w-full py-2 border border-indigo-300 rounded-md px-2 h-[145px]"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center sm:gap-x-4 gap-x-2">
            <h6>Comment : </h6>
            <div className="flex items-center gap-x-1">
              <input
                type="radio"
                value="open"
                name="status"
                className="appearance-none h-3 w-3 rounded-full border-gray-500 border checked:border-indigo-500 checked:bg-indigo-500"
              />
              <label htmlFor="radioone" className="inline-block text-gray-800">
                On
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="radio"
                value="close"
                name="status"
                className="appearance-none h-3 w-3 rounded-full border-gray-500 border checked:border-indigo-500 checked:bg-indigo-500"
                //   onChange={formik.handleChange}
                //   checked={formik.values.status === "close"}
              />
              <label htmlFor="radiotwo" className="inline-block text-gray-800">
                Off
              </label>
            </div>
          </div>
          <button className="bg-indigo-500  rounded-md px-6 border border-transparent py-2 text-white flex hover:bg-transparent hover:text-gray-700 hover:border-indigo-500 transition-all">
            Send Paper
          </button>
        </div>
      </form>
    </section>
  );
};

export default addPaper;
