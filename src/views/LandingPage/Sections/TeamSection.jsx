import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Regis from './GhostRegis'

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle";

import team1 from "assets/img/faces/jesse.jpg";
import team2 from "assets/img/faces/farid.jpg";
import team3 from "assets/img/faces/dai.jpg";

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class TeamSection extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    let user_keys = [];
    let konamiCode = '38,38,40,40,37,39,37,39,66,65'
    let message = ["%cKonami initialised...", "color: #fff; background: #245060; padding:10px ;font-size: 1.5em; line-height: 2.2em;"]
    window.console.log.apply(console, message)

    return (
      <div>
        {document.onkeydown = (e) => {
          user_keys.push(e.keyCode)
          if (user_keys.toString().indexOf(konamiCode) >= 0) {
            this.setState({
              open: true
            })
          }
        }}
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography className={classes.flex}>
                Secret News
              </Typography>
              <Button onClick={this.handleClose}>
                close
              </Button>
            </Toolbar>
          </AppBar>
          <Regis />
        </Dialog>

        <div className={classes.section}>
          <h2 className={classes.title}>Here is our team</h2>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={team1} alt="Jesse" className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Jesse Katsumata
                  <br />
                    <small className={classes.smallTitle}>Admin</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      Full Stack developer based in Tokyo. Strong believer in the
                      power of javascript. Tech Stack: React, React-Native, Node,
                      Electron, Mongo, Express
                  </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                      href="https://twitter.com/natural_clar"
                      target="_blank"
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                      href="https://github.com/Naturalclar"
                      target="_blank"
                    >
                      <i className={classes.socials + " fab fa-github"} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={team2} alt="Farid" className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Farid Hammouten
                  <br />
                    <small className={classes.smallTitle}>Founder</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      JavaScript Engineer based in Osaka. Big Dreamer and love to
                      exchange knowledge. Tech Stack: JavaScript, Node, React,
                      (start Express & Mongo november 2018)
                  </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                      href="https://twitter.com/Faridh212"
                      target="_blank"
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                      href="https://github.com/farid212"
                      target="_blank"
                    >
                      <i className={classes.socials + " fab fa-github"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                      href="https://medium.com/@farid212"
                      target="_blank"
                    >
                      <i className={classes.socials + " fab fa-medium"} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={team3} alt="Dai" className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Dai Phan Tran
                  <br />
                    <small className={classes.smallTitle}>Moderator</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      Open mind Web Designer based in France, love challenges and
                      meeting new people, believe that image is better than word
                      to express things.
                  </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                      href="http://www.twitter.com/dai_webdesign"
                      target="_blank"
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                      href="http://www.facebook.com/dai.webdesign"
                      target="_blank"
                    >
                      <i className={classes.socials + " fab fa-facebook"} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(teamStyle)(TeamSection);
