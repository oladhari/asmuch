/* eslint-disable react/require-render-return */
import React, { Component } from "react";
import Terminal from "react-bash";
import fileSys from "./partials/fileSys";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";

const history = [
  { value: "This bash hide another secret in the web site." },
  { value: "will you be able to find it?" },
  { value: "Type `help` to begin" }
];

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
    let user_keys = [];
    const konamiCode = "38,38,40,40,37,39,37,39,66,65";
    document.onkeydown = event => {
      user_keys.push(event.keyCode);
      if (user_keys.toString().indexOf(konamiCode) >= 0) {
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
          TransitionComponent={Transition}
        >
          <Terminal
            onClose={this.handleClose}
            structure={fileSys}
            prefix="root@asmuch"
            history={history}
            theme={Terminal.Themes.DARK}
          />
        </Dialog>
      </div>
    );
  }
}

export default HiddenTerminal;
