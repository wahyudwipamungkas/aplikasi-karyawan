import React from "react";
import './App.css'
import { Container } from 'react-bootstrap';
import ListUser from "./Components/ListUser";
import HalamanBaru from "./HalamanBaru";

function App() {

  return (
    <div className="App">
      <Container>
        <h3>Members</h3>
        <a href="#HalamanBaru">Button</a>
        <ListUser />
        <HalamanBaru />
      </Container>
    </div>
  );
}

export default App;