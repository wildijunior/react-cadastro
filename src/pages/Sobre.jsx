import { Card, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles({
  root: {
    marginTop: 120,
    padding: 50,
    background: "#00b894",
    borderRadius: 20,
    maxWidth: "100%",
    height: "100%",
  },
});

const Sobre = () => {
  const myStyle = useStyles();

  return (
    <Container>
      <Card className={myStyle.root}>
        <h1>Sobre</h1>
        <p>
          <small>
            <li>ReactJs</li>
            <li>Material Ui</li>
            <li>Versão 1.0</li>
          </small>
        </p>
        <em>Made by: Wildi Jr ♥</em>
      </Card>
    </Container>
  );
};

export default Sobre;
