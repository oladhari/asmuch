import { cardTitle, title } from "assets/jss/material-kit-react";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles";

const teamStyle = {
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
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    /* For Safari 3.1 to 6.0 */
    "-webkit-transition": "opacity 0.5s, transform 0.5s",
    transition: "opacity 0.5s, transform 0.5s",
    opacity: "0.5",
    "&:hover": {
      opacity: "1",
      transform: "scale(1.5) !important"
    }
  },
  btnTwitter: {
    color: "#55acee",
    boxShadow: "none"
  },
  btnFacebook: {
    color: "#3B5998",
    boxShadow: "none"
  },
  btnGithub: {
    color: "#24292e",
    boxShadow: "none"
  },
  btnMedium: {
    color: "black",
    boxShadow: "none"
  },
  btnYoutube: {
    color: "#FF0000",
    boxShadow: "none"
  },
  btnLinkedin: {
    color: "#0976b4",
    boxShadow: "none"
  },
  btnInstagram: {
    background:
      "linear-gradient(#405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
    color: "white",
    borderRadius: "4px"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
