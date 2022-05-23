import React from "react";
import './App.css'
import { Container } from 'react-bootstrap';
import HalamanBaru from "./HalamanBaru";
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Container>
        <h3>Members</h3>
        <Link to={"./HalamanBaru"}>
        <HalamanBaru />
        </Link>
      </Container>
    </div>
  );
}

export default App;