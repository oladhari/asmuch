import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// core components
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";

//expansion component
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  subTitle: {
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: 500
  },
  explication: {
    marginLeft: "30px",
    fontWeight: 300,
    marginBottom: "10px"
  }
});

function ExoPage(props) {
  const { classes } = this.props;
  return (
    <div>
      <AppBar className={classes.appBar}>
        <ToolBar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Skillz Project
          </Typography>
          <IconButton
            color="inherit"
            onClick={this.handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} className={classes.root}>
          {TableExo[0].map((exercice, keyLvl1) => {
            return (
              <ExpansionPanel key={keyLvl1}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="title" gutterBottom>
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
                            <Typography
                              component="p"
                              className={classes.explication}
                            >
                              {explication}
                            </Typography>
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
  );
}

ExoPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExoPage);
