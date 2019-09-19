import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HeaderLinks from "../../../components/Header/HeaderLinks.jsx";
import Parallax from "../../../components/Parallax/Parallax.jsx";

import { Link } from "react-router-dom";

import profile from "assets/img/faces/dai.jpg";

import { container, title } from "../../../assets/jss/material-kit-react.jsx";

import InstagramEmbed from "react-instagram-embed";

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
  container,
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
    // margin: "1.071rem auto 0",
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
    marginTop: "30px",
    minHeight: "32px",
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
  }
};

class DaiProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
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
        <Parallax filter image={require("assets/img/daibg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <Container maxWidth="sm">
                <Grid item xs={12} md={12}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="dai" className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Dai Phan Tran</h3>
                    </div>
                    <div>
                      <h2>Grapic Designer & Real Life Ninja</h2>
                    </div>
                  </div>
                  <div className={classes.description}>
                    <p>
                      Bringing details in all forms of art, having interest in
                      web design, logo, thumbnails, emoji, video making ect...
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <InstagramEmbed
                    url="https://www.instagram.com/p/B2aik77l4Ia/?utm_source=ig_embed&amp;utm_campaign=loading"
                    maxWidth="80%"
                    hideCaption={false}
                    containerTagName="div"
                    protocol=""
                    injectScript
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

DaiProfilePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(profilePageStyle)(DaiProfilePage);
