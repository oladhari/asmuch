import React from "react";
import Terminal from "react-bash";
import { hist } from "../../index";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import fileSys from "./partials/fileSys";

const history = [
  { value: "Hackers will be high-fived. ( ‘-’)人(ﾟ_ﾟ )" },
  { value: "Type `help` to begin" }
];

const style = {
  block: {
    height: "100vh"
  }
};

function TerminalPage(props) {
  const { classes } = props;
  return (
    <div className={classes.block}>
      <Terminal
        onClose={() => {
          hist.push("/");
        }}
        structure={fileSys}
        prefix="root@web"
        history={history}
        theme={Terminal.Themes.DARK}
      />
    </div>
  );
}

TerminalPage.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(style)(TerminalPage);
