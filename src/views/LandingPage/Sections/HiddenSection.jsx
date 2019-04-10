import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

// core components
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";

//expansion component
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Exo from "assets/js/hiddenExo";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  bazar: {
    padddingTop: "10vh"
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: "1rem"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class HiddenSection extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    let user_keys = [];
    let konamiCode = "38,38,40,40,37,39,37,39,66,65";
    const { classes } = this.props;
    var styleNice = [
      "%cNice you find one of the secret of this website.",
      "color: #fff; background: #245060; padding:10px ;font-size: 1.5em; line-height: 2.2em;"
    ];
    document.onkeydown = event => {
      user_keys.push(event.keyCode);
      if (user_keys.toString().indexOf(konamiCode) >= 0) {
        window.console.log.apply(console, styleNice);
        return this.setState({
          open: true
        });
      }
    };

    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <ToolBar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
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
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.bazar}
          >
            <Grid item xs={12} className={classes.root}>
              {Exo.map((el, key) => {
                return (
                  <ExpansionPanel key={key}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>
                        {el.title}
                      </Typography>
                    </ExpansionPanelSummary>
                    {el.import}
                    <ExpansionPanelDetails>
                      <Typography variant="display2" component="h3">
                        {el.descrip}
                      </Typography>
                      <Typography>{el.descrip}</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })}
            </Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

HiddenSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(HiddenSection);
