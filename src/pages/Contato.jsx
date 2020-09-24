import { Avatar, Card, Container, Fab, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import React from "react";

import "./Contato.css";

const useStyles = makeStyles({
  root: {
    float: "left",
    width: 350,
    height: 200,
    background: "#55efc4",
    borderRadius: 20,
    boxShadow: "0 2px 2px black",
    marginRight: 30,
    marginBottom: 30,
  },
  avatar: {
    display: "inline-block",
    flexDirection: "center",
    width: 60,
    height: 60,
    top: 15,
    left: 20,
  },
  fab: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    border: "none",
    bottom: 30,
    left: 250,
  },
});

const Contato = (props) => {
  const myStyle = useStyles();

  const img =
    "https://images.unsplash.com/photo-1600711270343-3aefe8cf88fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

  return (
    <div className="contato-app">
      <Container>
        <Card className={myStyle.root}>
          <Avatar className={myStyle.avatar} src={img} />
          <Typography className="info-card" variant="h5" component="h2">
            {props.nome}
          </Typography>
          <Typography className="info-card" variant="h6">
            <em> {props.profissao}</em>
          </Typography>
          <Typography className="info-card" variant="h6">
            <small>
              <em> {props.cidade}</em>
            </small>
          </Typography>
          <Typography className="info-card" variant="h6">
            <small>
              <em> {props.data}</em>
            </small>
          </Typography>
          <Typography className="info-card" variant="h6">
            <small>
              <em> {props.hora}</em>
            </small>
          </Typography>
          <Fab onClick={() => props.onDelete(props.id)} className={myStyle.fab}>
            <DeleteIcon style={{ color: "white" }} />
          </Fab>
        </Card>
      </Container>
    </div>
  );
};

export default Contato;
