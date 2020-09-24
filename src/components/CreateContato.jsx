import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Zoom from "@material-ui/core/Zoom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 300,
    maxHeight: 300,
    marginTop: 30,
    marginRight: "auto",
    marginBottom: 20,
    marginLeft: "auto",
    padding: 15,
    borderRadius: 7,
    boxShadow: "black",
  },
  fab: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    marginTop: 30,
    border: "none",
    top: 10,
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const CreateContato = (props) => {
  const myStyle = useStyles();

  const [contato, setContato] = useState({
    nome: "",
    profissao: "",
    cidade: "",
    consulta: "",
    calendario: "",
    hora: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContato((prevContato) => {
      return {
        ...prevContato,
        [name]: value,
      };
    });
  };

  // ao clicar
  const handleClick = (event) => {
    props.onAdd(contato);
    event.preventDefault();
    setContato({
      nome: "",
      profissao: "",
      cidade: "",
      calendario: "",
      hora: "",
    });
  };

  // expandir
  const [expandir, setExpandir] = useState(false);

  const handleExplandir = () => {
    setExpandir(true);
  };

  const [cor, setCor] = useState(false);
  const handleOver = () => {
    setCor(true);
  };

  const handleOut = () => {
    setCor(false);
  };

  return (
    <div>
      <form>
        <Card
          onMouseOver={handleOver}
          onMouseOut={handleOut}
          className={myStyle.root}
          style={{ background: cor ? "#55efc4" : "white" }}
        >
          <CardContent>
            <TextField
              onClick={handleExplandir}
              onChange={handleChange}
              name="nome"
              id="standard-basic"
              label="Nome"
              value={contato.nome}
              autoComplete="off"
            />
            <TextField
              onChange={handleChange}
              name="profissao"
              id="standard-basic"
              label="Profissao"
              value={contato.profissao}
              autoComplete="off"
            />

            <br />
            {expandir && (
              <TextField
                onClick={handleExplandir}
                onChange={handleChange}
                name="cidade"
                id="standard-basic"
                label="Cidade"
                value={contato.cidade}
                autoComplete="off"
              />
            )}
            <br />
            <Zoom in={expandir}>
              <Fab onClick={handleClick} className={myStyle.fab}>
                <AddIcon style={{ color: "white" }} />
              </Fab>
            </Zoom>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default CreateContato;
