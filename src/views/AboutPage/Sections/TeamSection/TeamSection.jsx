import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Container from "@material-ui/core/Container";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// links
import { Link } from "react-router-dom";

import TeamMember from "./TeamMember";
import team1 from "assets/img/faces/jesse.jpg";
import team2 from "assets/img/faces/farid.jpg";
import team3 from "assets/img/faces/dai.jpg";
import team4 from "assets/img/faces/oussama.jpg";

import { cardTitle, title } from "assets/jss/material-kit-react";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
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
  btnLinkedin: {
    color: "#0976b4",
    boxShadow: "none"
  },
  btnInstagram: {
    background:
      "linear-gradient(#405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
    color: "white",
    borderRadius: "4px"
  },
  margin5: {
    margin: "5px"
  }
};

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.section}>
          <h2 className={classes.title}>We are nerd rockstars</h2>
          <Container>
            <GridContainer justify="center">
              <GridItem xs={12} sm={5} md={3}>
                <Link to="/profile/farid">
                  <TeamMember
                    teamImage={team2}
                    altTeamImage="Farid"
                    title="Farid Hammouten"
                    titleName="CEO & ADMIN"
                    descriptionText="JavaScript Engineer based in Osaka. Big Dreamer and love
                      to exchange knowledge. Tech Stack: JavaScript, Node,
                      React, MongoDB, PHP and Rails"
                    twitter="https://twitter.com/Faridh212"
                    github="https://github.com/farid212"
                    medium="https://medium.com/@farid212"
                    linkedin="https://www.linkedin.com/in/farid212/"
                    youtube="https://www.youtube.com/channel/UCNJ3Q0ikz6UMaM8bVp3fH5g"
                  />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={5} md={3}>
                <Link to="/profile/jesse">
                  <TeamMember
                    teamImage={team1}
                    title="Jesse Katsumata"
                    altTeamImage="Jesse"
                    titleName="Admin"
                    descriptionText="Full Stack developer based in Tokyo. Strong believer in
                        the power of javascript. Tech Stack: React, React-Native,
                        Node, Electron, Mongo, Express"
                    twitter="https://twitter.com/natural_clar"
                    github="https://github.com/Naturalclar"
                  />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={5} md={3}>
                <Link to="/profile/dai">
                  <TeamMember
                    teamImage={team3}
                    title="Dai Phan Tran"
                    altTeamImage="Dai"
                    titleName="Moderator"
                    descriptionText="Open mind Web Designer based in France, love challenges
                        and meeting new people, believe that image is better than
                        word to express things."
                    twitter="http://www.twitter.com/dai_webdesign"
                    facebook="http://www.facebook.com/dai.webdesign"
                  />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={5} md={3}>
                <Link to="/profile/oussama">
                  <TeamMember
                    teamImage={team4}
                    altTeamImage="Oussama"
                    title="Oussama Ladhari"
                    titleName="Moderator"
                    descriptionText="Junior full stack web developer based in Nara Japan.
                    Father of 2 lovely daughters.
                    Tech Stack: React, Python, Ruby, Django, Rails"
                    linkedin="https://www.linkedin.com/in/oussama-ladhari/"
                    github="https://github.com/oladhari"
                    facebook="https://www.facebook.com/oussama.ladhari.9"
                  />
                </Link>
              </GridItem>
            </GridContainer>
          </Container>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(teamStyle)(TeamSection);
