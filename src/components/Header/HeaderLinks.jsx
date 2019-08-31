/*eslint-disable*/ 
import React from 'react';
import { Link } from 'react-router-dom';

// @MUI core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Button from "components/CustomButtons/Button.jsx";
// import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";


function HeaderLinks ({...props}){
    const { classes } = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
                <Link to="/" className={classes.block}>
                    HOME
                </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
                <Link to="/about" className={classes.block}>
                    ABOUT US
                </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
                <Link to="/EXO" className={classes.block}>
                    EXO
                </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
                <Link to="/services" className={classes.block}>
                    SERVICES
                </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
                <Link to="/kids" className={classes.block}>
                    KIDS
                </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
                <Link to="/otona" className={classes.block}>
                    ADULTS
                </Link>
            </ListItem>
        </List>
    )
};

export default withStyles(headerStyle)(HeaderLinks);