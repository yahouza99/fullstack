import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faSave,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import MyToast from "./myToast";

export default class Voiture extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    marque: "",
    modele: "",
    couleur: "",
    immatricule: "",
    prix: "",
    annee: "",
    show: false,
  };

  resetVoiture = () => {
    this.setState({ ...this.initialState, show: true });
  };

  submitVoiture = (event) => {
    event.preventDefault();
    const voiture = {
      marque: this.state.marque,
      modele: this.state.modele,
      couleur: this.state.couleur,
      immatricule: this.state.immatricule,
      annee: this.state.annee,
      prix: this.state.prix,
    };
    axios.post("http://localhost:8080/voitures", voiture).then((response) => {
      if (response.data != null) {
        this.setState({
          ...this.initialState,
          show: true,
          toastType: "success",
        });
        setTimeout(() => {
          this.setState({ show: false });
        }, 3000);
      }
    });
  };

  voitureChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast
            children={{
              show: this.state.show,
              message: "Voiture enregistrée avec succès",
              type: "success",
            }}
          />
        </div>
        <Card className="border border-dark bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={faPlusSquare} /> Ajouter Voiture
          </Card.Header>
          <Form
            onReset={this.resetVoiture}
            onSubmit={this.submitVoiture}
            id="VoitureFormId"
          >
            <Card.Body as={Row}>
              <Form.Group as={Col} controlId="formGridMarque">
                <Form.Label>Marque</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="marque"
                  value={this.state.marque}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Marque Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridModele">
                <Form.Label>Modèle</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="modele"
                  value={this.state.modele}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Modèle de Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCouleur">
                <Form.Label>Couleur</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="couleur"
                  value={this.state.couleur}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Couleur de Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridImmatricule">
                <Form.Label>Immatricule</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="immatricule"
                  value={this.state.immatricule}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Immatricule de Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPrix">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="prix"
                  value={this.state.prix}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Prix de Voiture"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAnnee">
                <Form.Label>Annee</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="annee"
                  value={this.state.annee}
                  autoComplete="off"
                  onChange={this.voitureChange}
                  className={"bg-dark text-white"}
                  placeholder="Entrez Immatricule de Voiture"
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} />
                Submit
              </Button>{" "}
              <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} />
                Reset
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    );
  }
}
