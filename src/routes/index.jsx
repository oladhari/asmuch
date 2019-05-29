import LandingPage from "views/LandingPage/LandingPage";
import TerminalPage from "views/TerminalPage/TerminalPage";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/terminal", name: "TerminalPage", component: TerminalPage }
];

export default indexRoutes;
