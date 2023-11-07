import React from "react";
import { Container } from "react-bootstrap";

class Bienvenue extends React.Component {
  render() {
    return (
      <div className="bg-dark p-5 rounded-lg m-3">
        <Container>
          <h1 className="display-4 text-white">Bienvenue au Magasin des Voitures</h1>
          <p className="lead text-white">
            Le meilleur de nos voitures est exposé près de chez vous
          </p>
          <hr className="my-4" />
          <p className="blockquote-footer">Master MIOLA</p>
        </Container>
      </div>
    );
  }
}

export default Bienvenue;
