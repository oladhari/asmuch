import LandingPage from "views/LandingPage/LandingPage";
import TerminalPage from "views/TerminalPage/TerminalPage";
import ProfilePage from "views/ProfilePage/ProfilePage";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/terminal", name: "TerminalPage", component: TerminalPage },
  { path: "/farid", name: "ProfilePage", component: ProfilePage }
];

export default indexRoutes;
