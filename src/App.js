import React from 'react';


//Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';



//My components
import Main from './components/main.component'
import Header from './components/header.component'

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Header></Header>

      </Row>
      <Main></Main>
    </Container>

  );
}

export default App;
