import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";

//JSS
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle";

import team1 from "assets/img/faces/jesse.jpg";
import team2 from "assets/img/faces/farid.jpg";
import team3 from "assets/img/faces/dai.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.section}>
          <h2 className={classes.title}>Here is our team</h2>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={team1} alt="Jesse" className="img-thumbnail" />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Jesse Katsumata
                    <br />
                    <small className={classes.smallTitle}>Admin</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      Full Stack developer based in Tokyo. Strong believer in
                      the power of javascript. Tech Stack: React, React-Native,
                      Node, Electron, Mongo, Express
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
                      href="https://github.com/Naturalclar"
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
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <Link to="/farid">
                      <img src={team2} alt="Farid" className="img-thumbnail" />
                    </Link>
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Farid Hammouten
                    <br />
                    <small className={classes.smallTitle}>Founder</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      JavaScript Engineer based in Osaka. Big Dreamer and love
                      to exchange knowledge. Tech Stack: Javascript, Nodejs,
                      Reactjs, Express, Mongo db, PHP, Bootstrap, MUI, CTMKR,
                      Python3
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
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={team3} alt="Dai" className="img-thumbnail" />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Dai Phan Tran
                    <br />
                    <small className={classes.smallTitle}>Moderator</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      Open mind Web Designer based in France, love challenges
                      and meeting new people, believe that image is better than
                      word to express things.
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
                      href="http://www.facebook.com/dai.webdesign"
                      target="_blank"
                    >
                      <i
                        className={
                          classes.socials +
                          " fab fa-facebook " +
                          classes.btnFacebook
                        }
                      />
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
