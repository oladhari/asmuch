import React from "react";
import { withStyles } from "@material-ui/core/styles";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//data Exo
import Exo from "../../assets/js/hiddenExo.jsx";

const styles = {
  root: {
    width: "100%"
  },
  heading: {
    fontSize: "1rem"
  }
};

function SimpleExpansionPanel() {
  return (
    <div>
      {Exo.map((element, key) => {
        return (
          <ExpansionPanel key={key}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{element.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{element.component}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
}

export default withStyles(styles)(SimpleExpansionPanel);
