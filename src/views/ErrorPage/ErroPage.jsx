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
import ErrorPageStyle from "assets/jss/material-kit-react/views/landingPage";

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
