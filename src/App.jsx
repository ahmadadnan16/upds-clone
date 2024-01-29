import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import FundAppeal from "./pages/FundAppeal";
import About from "./pages/About";
import MessageFromPresident from "./pages/MessageFromPresident";
import MessageFromHod from "./pages/MessageFromHod";
import MessageFromDeskOfCoordinator from "./pages/MessageFromDeskOfCoordinator";
import AlumniAssociationAndCommitteeDetails from "./pages/AlumniAssociationAndCommitteeDetails";
import Members from "./pages/Members";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Newsroom from "./pages/Newsroom";
import BeMentor from "./pages/BeMentor";
import ShareAchievements from "./pages/ShareAchievements";
import ShareOpportunities from "./pages/ShareOpportunities";
import InviteFriends from "./pages/InviteFriends";
import Volunteer from "./pages/Volunteer";
import Recruit from "./pages/Recruit";
import CampusVisit from "./pages/CampusVisit";
import SendQuery from "./pages/SendQuery";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/message_from_president" element={<MessageFromPresident/>}/>
          <Route path="/message_from_hod" element={<MessageFromHod/>}/>
          <Route path="/message_from_desk_of_coordinator" element={<MessageFromDeskOfCoordinator/>}/>
          <Route path="/alumni_association_and_committee_details" element={<AlumniAssociationAndCommitteeDetails/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/newsroom" element={<Newsroom/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/fund_appeal" element={<FundAppeal />} />
          <Route path="/be_a_mentor" element={<BeMentor/>}/>
          <Route path="/share_achievements" element={<ShareAchievements/>}/>
          <Route path="/share_opportunities" element={<ShareOpportunities/>}/>
          <Route path="/invite_friends" element={<InviteFriends/>}/>
          <Route path="/volunteer" element={<Volunteer/>}/>
          <Route path="/recruit" element={<Recruit/>}/>
          <Route path="/campus_visit" element={<CampusVisit/>}/>
          <Route path="/send_a_query" element={<SendQuery/>}/>
          <Route path="/contact_us" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
