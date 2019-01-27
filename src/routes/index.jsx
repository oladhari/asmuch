import LandingPage from "views/LandingPage/LandingPage";
import farid from "views/ProfilePage/Farid";
import jesse from "views/ProfilePage/Jesse";

var indexRoutes = [
    { path: "/", name: "LandingPage", component: LandingPage },
    { path: "/farid", name: "ProfilePage",component: farid },
    { path: "/jesse", name: "ProfilePage", component: jesse }
];

export default indexRoutes;
