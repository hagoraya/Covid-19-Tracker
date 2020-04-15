import React from 'react';


//Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';



//My components
import Main from './components/main.component'

function App() {
  return (

    <Container>
      <Row className="justify-content-md-center">
        <h1>Covid-19 Data</h1>
      </Row>
      <Main></Main>
    </Container>




  );
}

export default App;
