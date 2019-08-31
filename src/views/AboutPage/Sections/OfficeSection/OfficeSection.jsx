import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import { title } from "../../../../assets/jss/material-kit-react.jsx";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import office1 from "../../../../assets/img/offices/oaska.jpg";
import office2 from "../../../../assets/img/offices/namba.jpg";
import office3 from "../../../../assets/img/offices/nara.jpg";
import office4 from "../../../../assets/img/offices/shibuya.jpg";
import office5 from "../../../../assets/img/offices/oaska.jpg";

const tile = {
  office1: {
    img: office1,
    title: "osaka"
  },
  office2: {
    img: office2,
    title: "Namba"
  },
  office3: {
    img: office3,
    title: "Nara"
  },
  office4: {
    img: office4,
    title: "Shibuya"
  },
  office5: {
    img: office5,
    title: "Pics5"
  }
};

const styles = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  box: {
    boxSizing: "border-box",
    padding: "10px"
  },
  blueBox3: {
    height: "250px"
  },
  blueBox2: {
    height: "350px"
  },
  grayShadow: {
    boxShadow: "5px 5px 10px gray",
    padding: "10px 0"
  },
  imgContent: {
    height: "100%",
    width: "100%"
  }
};

const OfficeSection = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Container>
        <GridContainer>
          <GridItem xs={12}>
            <h2 className={classNames(classes.title, classes.section)}>
              The world is our office
            </h2>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" className={classes.grayShadow}>
          <GridItem
            xs={12}
            sm={4}
            className={classNames(classes.box, classes.blueBox3)}
          >
            <img
              className={classes.imgContent}
              src={tile.office1.img}
              alt={tile.office1.title}
            />
          </GridItem>
          <GridItem
            xs={12}
            sm={4}
            className={classNames(classes.box, classes.blueBox3)}
          >
            <img
              className={classes.imgContent}
              src={tile.office2.img}
              alt={tile.office2.title}
            />
          </GridItem>
          <GridItem
            xs={12}
            sm={4}
            className={classNames(classes.box, classes.blueBox3)}
          >
            <img
              className={classes.imgContent}
              src={tile.office3.img}
              alt={tile.office3.title}
            />
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            className={classNames(classes.box, classes.blueBox2)}
          >
            <img
              className={classes.imgContent}
              src={tile.office4.img}
              alt={tile.office4.title}
            />
          </GridItem>
          <GridItem
            xs={12}
            sm={6}
            className={classNames(classes.box, classes.blueBox2)}
          >
            <img
              className={classes.imgContent}
              src={tile.office5.img}
              alt={tile.office5.title}
            />
          </GridItem>
        </GridContainer>
      </Container>
    </React.Fragment>
  );
};

OfficeSection.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(OfficeSection);
