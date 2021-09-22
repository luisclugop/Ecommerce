import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Collections.css';
import Button from '../components/Button/js/Button';

const Collections = () => {
  
  return (
    <>
      <Container fluid className="collections" style={{ backgroundImage: "url(/img/backgrounds/background-collections.png)" }}>
        <Row>
          <Col xs={12} sm={12} md={12} className="justify-content-md-center">
            <Container className="collectionsDesign">
              <Row>
                <Col xs={12} sm={12} md={8} className="justify-content-md-center mt-2">
                  <Container className="collectionsDesignItems">
                    <div className="TextCollections">
                      <h3 className="CategoryCollections">Colecciones de Otoño</h3>
                      <h1 className="TittleCollections">Vibra con nuestros {"\n"}diseños</h1>
                      <Button title="Comprar Ahora" task={ () => { console.log("Comprar Ahora") } }/>
                    </div>
                  </Container>
                </Col>
                <Col xs={12} sm={12} md={4} className="justify-content-md-center mt-2">
                  <Container className="collectionsDesignItemsSmall">
                    <div className="TextCollections">
                      <p className="CategoryCollectionsSmall">Nuevos Diseños</p>
                      <h3 className="TittleCollectionsSmall">Vibra con nuestros {"\n"}diseños</h3>
                      <a href='N' className="LinkCollectionsSmall">Vamos</a>
                    </div>
                  </Container>
                  <Container className="collectionsDesignItemsSmall2">
                    <div className="TextCollections">
                      <p className="CategoryCollectionsSmall">Nuevos Diseños</p>
                      <h4 className="TittleCollectionsSmall">Vibra con nuestros {"\n"}diseños</h4>
                      <a href='N' className="LinkCollectionsSmall">Vamos</a>
                    </div>
                  </Container>
                </Col>
              </Row> 
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Collections;