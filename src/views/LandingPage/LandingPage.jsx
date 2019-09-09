import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import HiddenSection from "./Sections/TerminalSection/HiddenTerminal.jsx";

// Section Mobile UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "assets/jss/material-kit-react/views/componentsSections/theme";

// Style
import { container, title } from "assets/jss/material-kit-react";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    },
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    margin: "10px auto 50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

const muiTheme = createMuiTheme(theme);
const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="As much何とか"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />
          <Parallax filter image={require("assets/img/bg8.jpg")}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>Your Story start with us</h1>
                  <h2 className={classes.subtitle}>
                    As much 何とか is a little group of people who want to be
                    unique in there way to work or share knowledge with other
                    people around the world. We would like to contribute in a
                    new way that may help as many people as possible.
                  </h2>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <iframe
                    title="Test"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/5C1Dfsur4CI?rel=0&amp;showinfo=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <HiddenSection />
              <ProductSection />
              <WorkSection />
            </div>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(landingPageStyle)(LandingPage);
