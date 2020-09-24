import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Navegacao from "../src/components/Navegacao";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import CreateContato from "./components/CreateContato";
import Footer from "./components/Footer";

function App() {
  // cria array de contatos
  const [contatos, setContatos] = useState([]);

  // add contato
  const addContato = (contato) => {
    setContatos((prevContato) => {
      return [...prevContato, contato];
    });
  };

  // deletar contato
  const deleteContato = (id) => {
    setContatos((prevContato) => {
      return prevContato.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <Router>
      <Navegacao />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contato" exact>
            <CreateContato onAdd={addContato} />
            {/* CONTATOS */}
            {contatos.map((novoContato, index) => {
              return (
                <Contato
                  key={index}
                  id={index}
                  nome={novoContato.nome}
                  profissao={novoContato.profissao}
                  cidade={novoContato.cidade}
                  onDelete={deleteContato}
                />
              );
            })}
            {/* {/* CONTATO MANUAL
            <Contato
              nome="Joao"
              profissao="Apostolo"
              cidade="Jerusalem"
              onDelete={deleteContato}
            />
                   <Contato
              nome="Joao"
              profissao="Apostolo"
              cidade="Jerusalem"
              onDelete={deleteContato}
            /> */}
          </Route>
          <Route path="/sobre" exact>
            <Sobre />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
