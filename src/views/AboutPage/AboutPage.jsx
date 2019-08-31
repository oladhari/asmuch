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
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import Container from "@material-ui/core/Container";

// Sections for this page
import TeamSection from "./Sections/TeamSection/TeamSection.jsx";
import OfficeSection from "./Sections/OfficeSection/OfficeSection.jsx";

// Section Mobile UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "assets/jss/material-kit-react/views/componentsSections/theme";

// Style
const aboutPageStyle = {
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

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="As much 何とか"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />
          <Parallax filter image={require("assets/img/aboutus.jpg")} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <Container>
              <GridContainer justify="center">
                <TeamSection />
                <OfficeSection />
              </GridContainer>
            </Container>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(aboutPageStyle)(AboutPage);
