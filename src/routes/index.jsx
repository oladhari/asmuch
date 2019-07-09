import LandingPage from "views/LandingPage/LandingPage";
import TerminalPage from "views/TerminalPage/TerminalPage";
import FaProfilePage from "views/ProfilePage/FaProfilePage";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/terminal", name: "TerminalPage", component: TerminalPage },
  { path: "/farid", name: "ProfilePage", component: FaProfilePage }
];

export default indexRoutes;
