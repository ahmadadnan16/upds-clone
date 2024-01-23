
const Footer = () => {
  return (
    <footer className="w-full bg-[#EBECE7] py-3 lg:py-4">
      <div className="w-11/12 mx-auto flex flex-row  justify-between lg:items-center">
        <div className="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-5 lg:items-center ">
          <div>
            <h3 className="text-black/60">Powered By</h3>
            <h1 className="text-2xl font-semibold">ShadBox</h1>
          </div>
          <h2 className="text-black/60"> Copyright © 2024</h2>

          <ul className="flex flex-col lg:flex-row gap-1 lg:gap-3 text-black/60">
            <li className="font-medium">
              <a href="#">Disclaimer</a>
            </li>
            <li className="font-medium">
              <a href="#">Terms of Use</a>
            </li>
            <li className="font-medium">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="font-medium">
              <a href="#">Alumni Directory</a>
            </li>
          </ul>
        </div>
        <div>
        <h2 className="text-lg lg:text-xl font-medium py-1 text-black/70">Get it for phone</h2>
        <div className="flex justify-center md:items-center gap-3">
          <a href="#">
            <svg
              className="w-10"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={16}
                cy={16}
                r={14}
                fill="url(#paint0_linear_87_8317)"
              />
              <path
                d="M18.4468 8.65403C18.7494 8.12586 18.5685 7.45126 18.0428 7.14727C17.5171 6.84328 16.8456 7.02502 16.543 7.55318L16.0153 8.47442L15.4875 7.55318C15.1849 7.02502 14.5134 6.84328 13.9877 7.14727C13.462 7.45126 13.2811 8.12586 13.5837 8.65403L14.748 10.6864L11.0652 17.1149H8.09831C7.49173 17.1149 7 17.6089 7 18.2183C7 18.8277 7.49173 19.3217 8.09831 19.3217H18.4324C18.523 19.0825 18.6184 18.6721 18.5169 18.2949C18.3644 17.7279 17.8 17.1149 16.8542 17.1149H13.5997L18.4468 8.65403Z"
                fill="white"
              />
              <path
                d="M11.6364 20.5419C11.449 20.3328 11.0292 19.9987 10.661 19.8888C10.0997 19.7211 9.67413 19.8263 9.45942 19.9179L8.64132 21.346C8.33874 21.8741 8.51963 22.5487 9.04535 22.8527C9.57107 23.1567 10.2425 22.975 10.5451 22.4468L11.6364 20.5419Z"
                fill="white"
              />
              <path
                d="M22.2295 19.3217H23.9017C24.5083 19.3217 25 18.8277 25 18.2183C25 17.6089 24.5083 17.1149 23.9017 17.1149H20.9653L17.6575 11.3411C17.4118 11.5757 16.9407 12.175 16.8695 12.8545C16.778 13.728 16.9152 14.4636 17.3271 15.1839C18.7118 17.6056 20.0987 20.0262 21.4854 22.4468C21.788 22.975 22.4594 23.1567 22.9852 22.8527C23.5109 22.5487 23.6918 21.8741 23.3892 21.346L22.2295 19.3217Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_87_8317"
                  x1={16}
                  y1={2}
                  x2={16}
                  y2={30}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2AC9FA" />
                  <stop offset={1} stopColor="#1F65EB" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-8"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 511.999 511.999"
              xmlSpace="preserve"
            >
              <g>
                <path
                  style={{ fill: "#32BBFF" }}
                  d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028
		C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z"
                />
                <path
                  style={{ fill: "#32BBFF" }}
                  d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96
		c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z"
                />
                <path
                  style={{ fill: "#32BBFF" }}
                  d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103
		c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z"
                />
              </g>
              <path
                style={{ fill: "#2C9FD9" }}
                d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314
	L302.012,255.98H23.549z"
              />
              <path
                style={{ fill: "#29CC5E" }}
                d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212
	C322.891,142.356,227.427,88.937,79.355,6.028z"
              />
              <path
                style={{ fill: "#D93F21" }}
                d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789
	c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z"
              />
              <path
                style={{ fill: "#FFD500" }}
                d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123
	l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z"
              />
              <path
                style={{ fill: "#FFAA00" }}
                d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205
	C446.624,300.379,470.108,287.294,470.108,287.294z"
              />
            </svg>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
