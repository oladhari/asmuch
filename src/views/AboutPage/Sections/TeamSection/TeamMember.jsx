import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle";

class TeamSection extends React.Component {
  render() {
    const {
      classes,
      teamImage,
      altTeamImage,
      title,
      titleName,
      descriptionText,
      twitter,
      github,
      medium,
      facebook,
      linkedin,
      youtube
    } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <Card plain>
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img src={teamImage} alt={altTeamImage} className={imageClasses} />
        </GridItem>
        <h4 className={classes.cardTitle}>
          {title}
          <br />
          <small className={classes.smallTitle}>{titleName}</small>
        </h4>
        <CardBody>
          <p className={classes.description}>{descriptionText}</p>
        </CardBody>
        <CardFooter className={classes.justifyCenter}>
          {twitter ? (
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
              href={`${twitter}`}
              target="_blank"
            >
              <i
                className={
                  classNames(classes.socials, classes.btnTwitter) +
                  " fab fa-twitter"
                }
              />
            </Button>
          ) : null}
          {github ? (
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
              href={`${github}`}
              target="_blank"
            >
              <i
                className={
                  classNames(classes.btnGithub, classes.socials) +
                  " fab fa-github"
                }
              />
            </Button>
          ) : null}
          {medium ? (
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
              href={`${medium}`}
              target="_blank"
            >
              <i
                className={
                  classNames(classes.btnMedium, classes.socials) +
                  " fab fa-medium"
                }
              />
            </Button>
          ) : null}
          {facebook ? (
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
              href={`${facebook}`}
              target="_blank"
            >
              <i
                className={
                  classNames(classes.btnFacebook, classes.socials) +
                  " fab fa-facebook"
                }
              />
            </Button>
          ) : null}
          {linkedin ? (
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
              href={`${linkedin}`}
              target="_blank"
            >
              <i
                className={
                  classNames(classes.btnLinkedin, classes.socials) +
                  " fab fa-linkedin-in"
                }
              />
            </Button>
          ) : null}
          {youtube ? (
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
              href={`${youtube}`}
              target="_blank"
              noopener
            >
              <i
                className={
                  classNames(classes.btnYoutube, classes.socials) +
                  " fab fa-youtube"
                }
              />
            </Button>
          ) : null}
        </CardFooter>
      </Card>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  teamImage: PropTypes.string,
  altTeamImage: PropTypes.string,
  title: PropTypes.string,
  titleName: PropTypes.string,
  descriptionText: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  medium: PropTypes.string,
  facebook: PropTypes.string,
  linkedin: PropTypes.string,
  youtube: PropTypes.string
};

export default withStyles(teamStyle)(TeamSection);
