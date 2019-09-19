import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";

// core components
import { CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import Footer from "components/Footer/Footer";

//expansion component
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { title } from "assets/jss/material-kit-react";

//exercice
import TableExo from "assets/js/table";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  bazar: {
    padddingTop: "13vh"
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  headerTitle: {
    ...title,
    display: "inline-block",
    position: "relative",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  },
  headerSubtitle: {
    margin: "10px auto 50px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  title: {
    fontSize: "20px",
    fontWeight: "bolder"
  },
  link: {
    color: "white",
    fontWeight: "bold"
  },
  subTitle: {
    marginLeft: "20px",
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: 500
  },
  explication: {
    marginLeft: "30px",
    fontWeight: 300
    // marginBottom: "10px"
  },
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
});

const dashboardRoutes = [];

function BlogPage(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={
          <Link to="/" className={classes.link}>
            As much何とか
          </Link>
        }
        rightLinks={<HeaderLinks />}
        fixed
        changeColorsOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax filter image={require("assets/img/blog.jpg")}>
        <Container>
          <Grid item xs={12}>
            <h1 className={classes.headerTitle}>Wanna learn JavaScript?</h1>
            <h2 className={classes.headerSubtitle}>pick your poison</h2>
          </Grid>
        </Container>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} className={classes.root}>
            {TableExo[0].map((exercice, keyLvl1) => {
              return (
                <ExpansionPanel key={keyLvl1}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      variant="title"
                      gutterBottom
                      className={classes.title}
                    >
                      {exercice.title}
                    </Typography>
                  </ExpansionPanelSummary>
                  {exercice.content.map((partExo, keyLvl2) => {
                    return (
                      <div key={keyLvl2}>
                        <Typography
                          variant="subheading"
                          gutterBottom
                          className={classes.subTitle}
                        >
                          {partExo.subTitle}
                        </Typography>
                        {partExo.descript.map((explication, keyLvl3) => {
                          return (
                            <Grid item key={keyLvl3}>
                              <ul>
                                <Typography
                                  component="li"
                                  className={classes.explication}
                                >
                                  {explication}
                                </Typography>
                              </ul>
                            </Grid>
                          );
                        })}
                      </div>
                    );
                  })}
                </ExpansionPanel>
              );
            })}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}

BlogPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogPage);
