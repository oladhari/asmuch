import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle";
import TeamMember from "./TeamMember";
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
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TeamMember
                  teamImage={team2}
                  altTeamImage="Farid"
                  title="Farid Hammouten"
                  titleName="Founder"
                  descriptionText="JavaScript Engineer based in Osaka. Big Dreamer and love
                      to exchange knowledge. Tech Stack: JavaScript, Node,
                      React, (start Express & Mongo november 2018)"
                  twitter="https://twitter.com/Faridh212"
                  github="https://github.com/farid212"
                  medium="https://medium.com/@farid212"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TeamMember
                  teamImage={team3}
                  altTeamImage="Dai"
                  title="Dai Phan Tran"
                  titleName="Moderator"
                  descriptionText="JOpen mind Web Designer based in France, love challenges
                      and meeting new people, believe that image is better than
                      word to express things."
                  twitter="http://www.twitter.com/dai_webdesign"
                  facebook="http://www.facebook.com/dai.webdesign"
                />
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