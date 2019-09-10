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

// text
import EnglishPage from "./sections/english";
import FrenchPage from "./sections/french";
import SpainPage from "./sections/spain";

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
  licenceField: {
    padding: "3em",
    textAlign: "justify",
    fontFamily: "monospace"
  },
  button: {
    margin: "10px"
  }
};

const dashboardRoutes = [];

function LicensesPage(props) {
  const [language, setLanguage] = useState(EnglishPage);
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
        <Grid container>
          <Grid item direction="row" xs={12} alignContent="center">
            <div>
              <button
                type="button"
                className={classes.button}
                onClick={() => setLanguage(EnglishPage)}
              >
                En
              </button>
              <button
                className={classes.button}
                onClick={() => setLanguage(FrenchPage)}
              >
                FR
              </button>
              <button
                className={classes.button}
                onClick={() => setLanguage(SpainPage)}
              >
                ES
              </button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              className={classes.licenceField}
              dangerouslySetInnerHTML={{
                __html: language
              }}
            />
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
