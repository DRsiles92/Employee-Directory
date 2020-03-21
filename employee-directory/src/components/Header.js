import React from 'react';
import "../styles/Header.css";
import { Jumbotron, Container } from 'reactstrap';


const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Employee Directory</h1>
          <h3>Click on a column heading to sort</h3>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;