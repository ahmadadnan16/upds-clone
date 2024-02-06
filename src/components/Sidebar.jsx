import { NavLink } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="block lg:hidden text-white">
      <div
        className={`fixed top-0 left-0 h-screen overflow-auto bg-blue-600 transition-all duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="fixed right-3 mt-3" onClick={toggleSidebar}>
          <svg
            className="w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5L4.99998 19M5.00001 5L19 19"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul className=" mt-8 mb-5">
          <li className="transition-all duration-300  hover:bg-blue-800 block py-2 pl-3 pr-4">
            <NavLink to="/" className="" onClick={toggleSidebar}>
              HOME
            </NavLink>
          </li>
          <li className="pl-3">
            ABOUT
            <ul>
              {[
                { to: "/about", text: "About UDPS" },
                { to: "/message_from_president", text: "Message from President" },
                { to: "/message_from_hod", text: "Message from HOD" },
                { to: "/message_from_desk_of_coordinator", text: "Message from Desk of Coordinator" },
                { to: "/alumni_association_and_committee_details", text: "Alumni Association and Committee Details" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block"
                    to={item.to}
                    onClick={toggleSidebar}
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li className="pl-3">
            MORE
            <ul>
              {[
                { to: "/members", text: "Members" },
                { to: "/newsroom", text: "Newsroom" },
                { to: "/events", text: "Events" },
                { to: "/gallery", text: "Gallery" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block"
                    to={item.to}
                    onClick={toggleSidebar}
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li className="pl-3">
          ALUMNI GIVING BACK
            <ul>
              {[
                { to: "/fund_appeal", text: "Fund Appeal" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block"
                    to={item.to}
                    onClick={toggleSidebar}
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li className="pl-3">
          ENGAGE
          <ul>
            {[
              { to: "/be_a_mentor", text: "Be a Mentor" },
              { to: "/share_achievements", text: "Share Achievements" },
              { to: "/share_opportunities", text: "Share Opportunities" },
              { to: "/invite_friends", text: "Invite Friends" },
              { to: "/volunteer", text: "Volunteer" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block"
                  to={item.to}
                  onClick={toggleSidebar}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
          <li className="pl-3">
          ALUMNI ASSIST
          <ul>
            {[
              { to: "/recruit", text: "Recruit" },
              { to: "/campus_visit", text: "Campus Visit" },
              { to: "/send_a_query", text: "Send a Query" },
              { to: "/contact_us", text: "Contact Us" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block"
                  to={item.to}
                  onClick={toggleSidebar}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="transition-all duration-300  hover:bg-blue-800 block py-2 pl-3 pr-4">
            <NavLink to="/" className="" onClick={toggleSidebar}>
              MOBILE APP
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
