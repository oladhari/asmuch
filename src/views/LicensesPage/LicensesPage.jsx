import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { CssBaseline } from "@material-ui/core";
import HeaderLinks from "components/Header/HeaderLinks";
import Grid from "@material-ui/core/Grid";
import Parallax from "components/Parallax/Parallax";

// Style
import { container } from "assets/jss/material-kit-react";

const licencesStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
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
  },
  root: {
    width: "100%"
  }
};

const dashboardRoutes = [];

// const Transition = (direction, props) => {
//   return <slide direct={direction} {...props} />;
// };

function LicensesPage(props) {
  const [language, setLanguage] = useState("EN");
  const { classes, ...rest } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="As much何とか"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "blue"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/agree.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid containe direction="column" justify="center" alignItems="center">
          <Grid item xs={12} className={classes.root}>
            <p> Actual language = {language}</p>
            <button onClick={() => setLanguage("FR")}>FR</button>
            <button onClick={() => setLanguage("JP")}>JP</button>
            <button onClick={() => setLanguage("EN")}>EN</button>
            <button onClick={() => setLanguage("ES")}>ES</button>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}

LicensesPage.PropTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(licencesStyle)(LicensesPage);
