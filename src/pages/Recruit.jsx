const Recruit = () => {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto m-16 md:my-20">
      <h1 className="text-2xl font-semibold my-4 tracking-wide">
        Wish to Recruit?
      </h1>
      <div className="w-full my-5 border rounded-md p-5">
        <h1 className="text-sm md:text-lg text-gray-400">
          Please complete this form to indicate your interest. We will reach out
          to you shortly.
        </h1>

        <form className="my-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center my-4">
            <label
              htmlFor="text"
              className="md:w-2/12 md:text-lg font-medium my-2 md:my-0 text-gray-400 tracking-wide"
            >
              Name:<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="md:w-10/12 border rounded-md px-3 py-1 bg-gray-100 focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center my-4">
            <label
              htmlFor="email"
              className="md:w-2/12 md:text-lg font-medium text-gray-400 tracking-wide"
            >
              Email:<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="md:w-10/12 border rounded-md px-3 py-1 bg-gray-100 focus:outline-blue-400 md:-ml-1"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center my-4">
            <label
              htmlFor="number"
              className="md:w-2/12 md:text-lg font-medium text-gray-400 tracking-wide"
            >
              Mob No:<span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              required
              className="md:w-10/12 border rounded-md px-3 py-1 bg-gray-100 focus:outline-blue-400 md:-ml-1"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between  md:items-center my-4">
            <label
              htmlFor="text"
              className="md:w-2/12 md:text-lg font-medium my-2 md:my-0 text-gray-400 tracking-wide"
            >
              Company Name:
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="md:w-10/12 border rounded-md px-3 py-1 bg-gray-100 focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between  md:items-center my-4">
            <label
              htmlFor="text"
              className="md:w-2/12 md:text-lg font-medium my-2 md:my-0 text-gray-400 tracking-wide"
            >
              Designation/Role:
            </label>
            <input
              type="text"
              name="role"
              id="role"
              className="md:w-10/12 border rounded-md px-3 py-1 bg-gray-100 focus:outline-blue-400"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between   my-4">
            <label
              htmlFor="text"
              className="md:w-2/12 md:text-lg font-medium my-2 md:my-0 text-gray-400 tracking-wide"
            >
              Message:<span className="text-red-600">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="md:w-10/12 border rounded-md px-3 py-1 bg-gray-100 focus:outline-blue-400"
            />
          </div>
          <button type="button" className="text-white bg-blue-500 hover:bg-blue-900 transition-all duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:ml-[85px] lg:ml-40 mt-6">Submit</button>


        </form>
      </div>
    </div>
  );
};

export default Recruit;
