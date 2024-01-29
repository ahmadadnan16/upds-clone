import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-blue-600">
      <div className="w-10/12 mx-auto flex  text-white  text-lg font-semibold ">
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          ABOUT US
          <ul className="absolute hidden bg-blue-600 text-white mt-4 -ml-5  group-hover:block">
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/about"
              >
                About UDPS
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block "
                to="/message_from_president"
              >
                Message from President
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/message_from_hod"
              >
              Message from HOD 
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/message_from_desk_of_coordinator"
              >
              Message from Desk of Coordinator 
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/alumni_association_and_committee_details"
              >
              Alumni Association and Committee Details
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          MORE
          <ul className="absolute hidden bg-blue-600 text-white mt-4 -ml-5  group-hover:block">
          <li className>
            <NavLink
              className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
              to="/members"
            >
              Members
            </NavLink>
          </li>
          <li className>
            <NavLink
              className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block "
              to="/newsroom"
            >
              Newsroom
            </NavLink>
          </li>
          <li className>
            <NavLink
              className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
              to="/events"
            >
            Events 
            </NavLink>
          </li>
          <li className>
            <NavLink
              className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
              to="/gallery"
            >
            Gallery 
            </NavLink>
          </li>
         
        </ul>
        </div>
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          ALUMNI GIVING BACK
          <ul className="absolute hidden bg-blue-600 text-white mt-4 -ml-5  group-hover:block">
          <li className>
            <NavLink
              className="transition-all duration-300  hover:bg-blue-800 py-2 pl-4 pr-24 block "
              to="/fund_appeal"
            >
              Fund Appeal
            </NavLink>
          </li>
          </ul>
        </div>
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          ENGAGE
          <ul className="absolute hidden bg-blue-600 text-white mt-4 -ml-5  group-hover:block">
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/be_a_mentor"
              >
                Be a Mentor
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block "
                to="/share_achievements"
              >
                Share Achievements
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/share_opportunities"
              >
              Share Opportunities 
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/invite_friends"
              >
              Invite Friends 
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/volunteer"
              >
              Volunteer
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer group">
          Alumni Assist
          <ul className="absolute hidden bg-blue-600 text-white mt-4 -ml-5  group-hover:block">
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/recruit"
              >
                Recruit
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300 hover:bg-blue-800 py-2 px-4 block "
                to="/campus_visit"
              >
                Campus Visit
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/send_a_query"
              >
              Send a Query 
              </NavLink>
            </li>
            <li className>
              <NavLink
                className="transition-all duration-300  hover:bg-blue-800 py-2 px-4 block "
                to="/contact_us"
              >
              Contact Us 
              </NavLink>
            </li>
           
          </ul>
        </div>
        <div className="py-4 px-5 hover:bg-blue-800 hover:border-x-white transition-all duration-300  cursor-pointer">
          Mobile App
        </div>
      </div>
    </div>
  );
};

export default Navbar;
