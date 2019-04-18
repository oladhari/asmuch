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
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     open: false
  //   };
  // };

  // handleClose = () =>{
  //   this.setState({
  //     open: false
  //   });
  // };

  render() {
    const { handleOpen, handleClose } = this.props;
    return (
      <div>
        <Dialog
          open={handleOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
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
