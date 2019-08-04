/* eslint-disable react/require-render-return */
import React, { Component } from "react";
import Terminal from "react-bash";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import fileSys from "./partials/fileSys";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";

const history = [
  { value: "Hackers will be high-fived. ( ‘-’)人(ﾟ_ﾟ )" },
  { value: "Type `help` to begin" }
];

const style = {
  block: {
    height: "100vh"
  }
};

function Transition(props) {
  return <Slide direct="down" {...props} />;
}

class HiddenTerminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClose = () => {
    this.setState({
      open: !this.state
    });
  };

  render() {
    const { classes } = this.props;
    let user_keys = [];
    let konamiCode = "38,38,40,40,37,39,37,39,66,65";
    let SS1 = [
      "%cSecret #1",
      "color: #fff; background: #f7d602; padding:10px ;font-size: 1.5em; line-height: 2.2em;"
    ];
    document.onkeydown = event => {
      user_keys.push(event.keyCode);
      if (user_keys.toString().indexOf(konamiCode) >= 0) {
        window.console.log.apply(console, SS1);
        return this.setState({
          open: true
        });
      }
    };

    return (
      <div className={classes.block}>
        <Dialog
          fullScreen
          open={this.state.open}
          TransitionComponent={Transition}
        >
          <Terminal
            onClose={this.handleClose}
            structure={fileSys}
            prefix="root@web"
            history={history}
            theme={Terminal.Themes.DARK}
          />
        </Dialog>
      </div>
    );
  }
}

HiddenTerminal.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(style)(HiddenTerminal);
