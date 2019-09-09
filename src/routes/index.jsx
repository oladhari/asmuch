import LandingPage from "../views/LandingPage/LandingPage.jsx";
import ExoPage from "../views/ExoPage/ExoPage.jsx";
import FaProfilePage from "../views/ProfilePage/FaProfilePage/FaProfilePage.jsx";
import JessProfilePage from "../views/ProfilePage/JessProfilePage/JessProfilePage.jsx";
import DaiProfilePage from "../views/ProfilePage/DaiProfilePage/DaiProfilePage.jsx";
import OussProfilePage from "../views/ProfilePage/OussProfilePage/OussProfilePage.jsx";
import AboutPage from "../views/AboutPage/AboutPage.jsx";
import ErrorPage from "../views/ErrorPage/ErroPage.jsx";
import LicensesPage from "../views/LicensesPage/LicensesPage.jsx";

var indexRoutes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/exo",
    name: "ExoPage",
    component: ExoPage
  },
  {
    path: "/profile/farid",
    name: "Farid-Profile",
    component: FaProfilePage
  },
  {
    path: "/profile/jesse",
    name: "Jesse-Profile",
    component: JessProfilePage
  },
  {
    path: "/profile/dai",
    name: "Dai-Profile",
    component: DaiProfilePage
  },
  {
    path: "/profile/oussama",
    name: "Oussama-Profile",
    component: OussProfilePage
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage
  },
  {
    path: "/licenses",
    name: "LicensesPage",
    component: LicensesPage
  },
  {
    path: "",
    name: "ErrorPage",
    component: ErrorPage
  }
];

export default indexRoutes;
