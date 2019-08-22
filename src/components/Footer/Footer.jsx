/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <Container>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/"
                className={classes.block}
                target="_blank"
              >
                AsMuch何とか
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/about"
                className={classes.block}
              >
                About us
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/blog"
                className={classes.block}
              >
                Blog
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/licences"
                className={classes.block}
              >
                Licenses
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <Link
            to="https://github.com/asmuch/"
            className={aClasses}
            target="_blank"
          >
            AsMuch何とか
          </Link>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
