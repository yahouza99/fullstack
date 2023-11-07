import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./Components/NavigationBar";
import Bienvenue from "./Components/Bienvenue";
import Footer from "./Components/Footer";
import Voiture from "./Components/Voiture";
import VoitureListe from "./Components/VoitureListe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marque: "",
      modele: "",
      couleur: "",
      annee: "",
      prix: "",
    };
  }

  submitVoiture(event) {
    alert(this.state.marque);
    event.preventDefault();
  }

  render() {
    const marginTop = {
      marginTop: "20px",
    };

    return (
      <Router>
        <NavigationBar />
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Routes>
                <Route path="/" element={<Bienvenue />} />
                <Route path="/add" element={<Voiture />} />
                <Route path="/edit/:id" element={<Voiture/>} />
                <Route path="/list" element={<VoitureListe />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    );
  }
}

export default App;
