import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";


import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's share your knowledge</h2>
            <h4 className={classes.description}>
              Join our communit of knowledge exchange and make better web by helping and being helped, make your fingerprinted on the web by our side.
            </h4>
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

export default withStyles(workStyle)(WorkSection);
