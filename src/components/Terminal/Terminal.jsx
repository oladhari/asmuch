import React from "react";
import { TerminalStateLess } from "react-terminal-component";

function Terminal() {
  return (
    <TerminalStateLess
      theme={{
        background: "#141313",
        promptSymbolColor: "#6effe6",
        commandColor: "#fcfcfc",
        outputColor: "#fcfcfc",
        errorOutputColor: "#ff89bd",
        fontSize: "1.1rem",
        spacing: "1%",
        fontFamily: "monospace",
        width: "50%",
        height: "25vh"
      }}
      autofocus={true}
      clickToFocus={false}
      acceptInput={true}
      promptSymbol=">"
      terminalId="terminal01"
    />
  );
}

export default Terminal;
