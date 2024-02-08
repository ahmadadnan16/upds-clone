const ContactUs = () => {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto my-20">
      <h1 className="text-2xl font-semibold my-4 tracking-wide">Contact Us</h1>
      <div className="w-full rounded-md shadow-xl p-5 tracking-wide">
        <h1 className="text-lg font-semibold my-1">
          Team ABCD - Alumni Connectivity Program
        </h1>
        <h2 className="text-lg pr-2">
          Email:{" "}
          <span className="text-blue-500 underline cursor-pointer">
            institute@abcd.com
          </span>
        </h2>
        <p className="text-lg">Department of Mathematical Sciences,</p>
        <p className="text-lg">R. T. M. Nagpur University, Nagpur-440033.</p>
        <div className="my-10 md:text-lg">
          <h1 className="text-lg font-semibold my-1">Dr. Xyz Pqr</h1>
          <p>Associate Professor,</p>
          <p>Teacher Co-ordinator</p>
          <p>ABCD Nagpur Alumni Association</p>
          <p>Department of Mathematical Sciences,</p>
          <p>R. T. M. Nagpur University, Nagpur-440033</p>
          <p>Phone: 0123456789, 0987654321</p>
          <h2 className="pr-2">
            Email:{" "}
            <span className="text-blue-500 underline cursor-pointer">
              institute@abcd.com
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
