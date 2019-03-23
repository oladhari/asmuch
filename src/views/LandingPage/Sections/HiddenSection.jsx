import React from 'react';
import { makeStyles } from '@material-ui/styles';

// core components
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

// JSS
import hiddenStyle from 'assets/jss/material-kit-react/views/landingPageSections/hiddenStyle.jsx'

function Transition(props){
    return <Slide direction="up" {...props} />;
}

class HiddenSection extends React.Component{
    state = {
        open: false
    };

    handleClose = () =>{
        this.setState({
            open: false
        });
    };

    render(){
        let user_keys = [];
        let konamiCode = "38,38,40,40,37,39,37,39,66,65";
        const classes = makeStyles(hiddenStyle);
        return(  
            <div>
                {
                    document.onkeydown = (event) => {
                    user_keys.push(event.keyCode);
                    if(user_keys.toString().indexOf(konamiCode)>= 0){
                        return this.setState({
                            open: true
                        });
                    }
                }
                }
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <ToolBar>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                Skillz Project
                            </Typography>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </ToolBar>
                    </AppBar>
                    <div><h1>Ok it is working</h1></div>
                </Dialog>
            </div>
        )
        
    }
}

export default HiddenSection;