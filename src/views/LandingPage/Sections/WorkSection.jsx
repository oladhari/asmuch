import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{`Let's share your knowledge`}</h2>
            <h4 className={classes.description}>
              {`Join our communit of knowledge exchange and make better web by
              helping and being helped, make your fingerprinted on the web by
              our side.`}
            </h4>
            <h3 className={classes.title}>
              {`When you join, please perform the following in GENERAL channel:`}
            </h3>
            <ul className={classes.textLeft}>
              <li>{`Introduce yourself`}</li>
              <li>{`explain what and how you can help others`}</li>
              <li>{`then ask help you would like to have`}</li>
              <li>
                {`As much you help this community, As much you will received from it...`}
              </li>
            </ul>
          </GridItem>
          <GridItem
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              href="https://join.slack.com/t/asmuchnantoka/shared_invite/enQtNDk3OTMyMjY1MzkzLTA2YTc0Y2YzZWE5NGZlMmQyODJkMjEzY2ZjYzZiZmY2NTdmNDg2ODQzMDdlYWEyNDRiOGI4OWM1MjY2ZWI5YWU"
              target="_blank"
            >
              Go to Slack
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

WorkSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(workStyle)(WorkSection);
