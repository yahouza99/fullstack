import React from "react";
import { Container, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom'

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to={""} className="nav-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tata_Tamo_Racemo.jpg"
            width="25"
            height="25"/>
        </Link>{' '}
        <div class="text-white">MIOALA Shop</div>
        <Link to={"add"} className="nav-link">
          Ajouter une voiture
        </Link>
        <Link to={"list"} className="nav-link">
          Liste des Voitures
        </Link>
      </Navbar>
          

    );
  }
}
export default NavigationBar;
