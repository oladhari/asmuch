import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import GridContainer from "../../../components/Grid/GridContainer.jsx";
// import GridItem from "../../../components/Grid/GridItem.jsx";
import HeaderLinks from "../../../components/Header/HeaderLinks.jsx";
import NavPills from "../../../components/NavPills/NavPills.jsx";
import Parallax from "../../../components/Parallax/Parallax.jsx";

import { Link } from "react-router-dom";

import profile from "assets/img/faces/farid.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import { title } from "../../../assets/jss/material-kit-react.jsx";
import theme from "assets/jss/material-kit-react/views/componentsSections/theme";

const imagesStyle = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};

const profilePageStyle = {
  container: {
    zIndex: "12"
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
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
  socials: {
    marginTop: "0",
    width: "100%",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    /* For Safari 3.1 to 6.0 */
    "-webkit-transition": "opacity 0.5s, transform 0.5s",
    transition: "opacity 0.5s, transform 0.5s",
    opacity: "0.5",
    "&:hover": {
      opacity: "1",
      transform: "scale(1.5) !important"
    }
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  btnTwitter: {
    color: "#55acee",
    boxShadow: "none"
  },
  btnFacebook: {
    color: "#3B5998",
    boxShadow: "none"
  },
  btnGithub: {
    color: "#24292e",
    boxShadow: "none"
  },
  btnMedium: {
    color: "black",
    boxShadow: "none"
  },
  btnYoutube: {
    color: "#FF0000",
    boxShadow: "none"
  },
  margin5: {
    margin: "5px"
  }
};

class FaProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Link to="/">
          <Header
            color="transparent"
            brand="As much 何とか"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 200,
              color: "white"
            }}
            {...rest}
          />
        </Link>
        <Parallax
          filter
          image={require("assets/img/cityhunter02.jpg")}
          style={{ height: "80vh" }}
        >
          <Container maxWidth="sm" className={classes.container}>
            <Grid item xs={12}>
              <h2 className={classes.title}>I love this song</h2>
            </Grid>
            <Grid item xs={12}>
              <iframe
                title="Test"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5C1Dfsur4CI?rel=0&amp;showinfo=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Grid>
          </Container>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <Container maxWidth="sm">
                <Grid item xs={12} md={12}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Farid Hammouten</h3>
                      <h6>Owner & Founder</h6>
                      <h5>Web Developer</h5>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                        href="https://twitter.com/Faridh212"
                        target="_blank"
                      >
                        <i
                          className={
                            classes.socials +
                            " fab fa-twitter " +
                            classes.btnTwitter
                          }
                        />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                        href="https://github.com/farid212"
                        target="_blank"
                      >
                        <i
                          className={
                            classes.socials +
                            " fab fa-github " +
                            classes.btnGithub
                          }
                        />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                        href="https://medium.com/@farid212"
                        target="_blank"
                      >
                        <i
                          className={
                            classes.socials +
                            " fab fa-medium " +
                            classes.btnMedium
                          }
                        />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                        href="https://www.youtube.com/channel/UCNJ3Q0ikz6UMaM8bVp3fH5g"
                        target="_blank"
                      >
                        <i
                          className={
                            classes.socials +
                            " fab fa-youtube " +
                            classes.btnYoutube
                          }
                        />
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Container>
              <div className={classes.description}>
                <p>
                  JavaScript Engineer based in Osaka. Big Dreamer and love to
                  exchange knowledge. Tech Stack: JavaScript, Node, React,
                  Express & Mongo db.{" "}
                </p>
              </div>
              <Container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={8}
                  className={classes.navWrapper}
                >
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <Container>
                            <Grid item xs={12} md={12}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </Grid>
                          </Container>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <Container>
                            <Grid item xs={12} md={12}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </Grid>
                          </Container>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <Container justify="center">
                            <Grid item xs={12} md={12}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </Grid>
                          </Container>
                        )
                      }
                    ]}
                  />
                </Grid>
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

FaProfilePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(profilePageStyle)(FaProfilePage);
