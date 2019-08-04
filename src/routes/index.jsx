import LandingPage from "../views/LandingPage/LandingPage";
import ExoPage from "../views/ExoPage/ExoPage.jsx";
import FaProfilePage from "../views/ProfilePage/FaProfilePage";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/Exo", name: "ExoPage", component: ExoPage },
  { path: "/farid", name: "ProfilePage", component: FaProfilePage }
];

export default indexRoutes;
