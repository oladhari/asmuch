import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class HiddenConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    let user_keys = [];
    let cnslCode = "67,79,78,83,79,76,69,13";
    let SS2 = [
      "%cSecret #2",
      "color: #fff; background: #245060; padding:10px ;font-size: 1.5em; line-height: 2.2em;"
    ];
    document.onkeydown = event => {
      user_keys.push(event.keyCode);
      if (user_keys.toString().indexOf(cnslCode) >= 0) {
        window.console.log.apply(console, SS2);
        return this.setState({
          open: true
        });
      }
    };
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default HiddenConsole;
