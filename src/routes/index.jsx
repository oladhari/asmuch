import LandingPage from "views/LandingPage/LandingPage.jsx";
import AboutEnglishPage from "views/AboutPage/english.jsx";
import AboutFrenchhPage from "views/AboutPage/french.jsx";
import AboutSpainPage from "views/AboutPage/spain.jsx";


var indexRoutes = [
    { path: "/", name: "LandingPage", component: LandingPage },
    { path: "/about/english", name: "aboutPage", component: AboutEnglishPage },
    { path: "/about/spain", name: "aboutPage", component: AboutSpainPage },
    { path: "/about/french", name: "aboutPage", component: AboutFrenchhPage }

];

export default indexRoutes;
