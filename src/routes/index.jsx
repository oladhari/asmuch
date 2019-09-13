import LandingPage from "../views/LandingPage/LandingPage.jsx";
import ExoPage from "../views/ExoPage/ExoPage.jsx";
import FaProfilePage from "../views/ProfilePage/FaProfilePage.jsx";
import KeyBase from "../views/keybase.txt/keybase.jsx";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/exo", name: "ExoPage", component: ExoPage },
  { path: "/farid", name: "ProfilePage", component: FaProfilePage },
  { path: "/.well-known/keybase.txt", name: "KeyBase", component: KeyBase }
];

export default indexRoutes;
