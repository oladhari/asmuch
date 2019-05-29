import React from "react";
import Terminal from "react-bash";
import { hist } from "../../index";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// // {
//   borderadius: "0px",
//   display: "flex",
//   flexDirection: "column",
//   fontFamily: "Inconsolata, monospace;",
//   fontSize: "13px;",
//   fontWeight: "400;",
//   height: "100vh;",
//   overflowY: "hidden;",
//   textAlign: "left;"
// }

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
  const fileSys = {
    Desktop: {
      JavaScripting: {}
    },
    Pictures: {
      ".secret": {
        ".Nude.jpg": { content: "you really thought it was real?" }
      }
    },
    Documents: {},
    Music: {},
    Public: {},
    Downloads: {},
    Videos: {},
    ".profile": { content: "ありがとうございます" },
    "README.md": {
      content: "✌⊂(✰‿✰)つ✌ Thanks for checking out the tool!"
    },
    sandBox: {
      javascript: {
        "var.txt": {
          content: [
            "var <variable> = <declaration>;",
            " ==> 'var' is now the weakest signal available when you define a variable in JavaScript. The variable may or may not be reassigned, and the variable may or may not be used for an entire function, or just for the purpose of a block or loop."
          ]
        },
        "let.txt": {
          content: [
            "let <variable> = <declaration>;",
            " ==> 'let' let is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function."
          ]
        },
        "const.txt": {
          content: [
            "const <variable> = <declaration>;",
            " ==> 'const' is a signal that the identifier won’t be reassigned."
          ]
        }
      }
    }
  };

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
