import { Card, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import "./Home.css";

const useStyles = makeStyles({
  root: {
    marginTop: 120,
    padding: 50,
    background: "#00b894",
    borderRadius: 20,
  },
});

const Home = () => {
  const myStyle = useStyles();
  return (
    <Container>
      <Card className={myStyle.root}>
        <div>
          <h1>Cadastro de Contatos</h1>
          <p>Front-End para cadastro de contato.</p>
        </div>
      </Card>
    </Container>
  );
};

export default Home;
