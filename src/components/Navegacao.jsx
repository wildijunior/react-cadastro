import { AppBar, Container, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";

const useStyles = makeStyles({
  root: {
    background: "#00b894",
  },
  toolColor: {
    background: "",
  },
  iconColor: {
    color: "white",
  },
});

const Navegacao = () => {
  const myStyle = useStyles();
  return (
    <AppBar position="static" className={myStyle.root}>
      <Container>
        <nav className="navbar">
          <Link to="/">
            <DevicesOtherIcon className={myStyle.iconColor} />
          </Link>
          <Toolbar>
            <NavLinks />
          </Toolbar>
        </nav>
      </Container>
    </AppBar>
  );
};

export default Navegacao;
