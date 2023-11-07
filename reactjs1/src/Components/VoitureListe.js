import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import MyToast from "./myToast";
import { Button, ButtonGroup, Card, Table } from "react-bootstrap";
import axios from "axios";
import {Link} from 'react-router-dom'

export default class VoitureListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voitures: [],
    };
  }

componentDidMount() {
  axios
    .get("http://localhost:8080/voitures") // Updated URL to use /api
    .then((response) => response.data)
    .then((data) => {
      this.setState({ voitures: data });
    });
}

deleteVoiture = (voitureId) => {
  axios
    .delete("http://localhost:8080/voitures/" + voitureId) // Updated URL to use /api
    .then((response) => {
      if (response.data != null) {
        alert("Voiture supprimée avec succès.");
        this.setState({
          voitures: this.state.voitures.filter(
            (voiture) => voiture.id !== voitureId
          ),
        });
      }
    });
}

  render() {
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            children={{
              show: this.state.show,
              message: "Voiture supprimée avec succès.",
              type: "danger",
            }}
          />
        </div>
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
            <FontAwesomeIcon icon={faList} /> Liste des Voitures
          </Card.Header>
          <Card.Body>
            <Table bordered hover striped variant="dark">
              <thead>
                <tr>
                  <th>Marque</th>
                  <th>Modele</th>
                  <th>Couleur</th>
                  <th>Immatricule</th>
                  <th>Annee</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {this.state.voitures.length === 0 ? (
                  <tr align="center">
                    <td colSpan="6">Aucune Voiture n'est disponible</td>
                  </tr>
                ) : (
                  this.state.voitures.map((voiture) => (
                    <tr key={voiture.id}>
                      <td>{voiture.marque}</td>
                      <td>{voiture.modele}</td>
                      <td>{voiture.couleur}</td>
                      <td>{voiture.immatricule}</td>
                      <td>{voiture.annee}</td>
                      <td>{voiture.prix}</td>
                      <td>
                        <ButtonGroup>
                          <Link
                            to={"http://localhost:3000/edit/" + voiture.id}
                            className="btn btn-sm btn-outline-primary"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>{" "}
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={this.deleteVoiture.bind(this, voiture.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
