import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    top: "auto",
    bottom: 0,
    textAlign: "center",
    background: "#00b894",
    paddingTop: 15,
  },
});

const Footer = () => {
  const meuEstilo = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={meuEstilo.appBar}>
      <footer>
        <p>
          <small>
            © Todos os direitos reservados {new Date().getFullYear()} | Wildi Jr
          </small>
        </p>
      </footer>
    </AppBar>
  );
};

export default Footer;
