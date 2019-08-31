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
// import GridItem from "components/Grid/GridItem";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import Container from "@material-ui/core/Container";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

const ErrorPageStyle = {
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    height: "50vh"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

const dashboardRoutes = [];

const ErrorPage = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
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
      />
      <Parallax filter image={require("assets/img/404page.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container>
          <GridContainer justify="center">
            <Typography variant="h1" align="center">
              <b>The Page you tried to reach do not exist</b>
            </Typography>
          </GridContainer>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

ErrorPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(ErrorPageStyle)(ErrorPage);
