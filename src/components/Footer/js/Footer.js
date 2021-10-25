import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Footer.css';

const FooterPage = () => {
  return (
    <>
    <Container fluid className="footerDesign">
        <Row>
            <Col xs={12} sm={6} md={6} className="justify-content-md-center">
                <div className="footerContent">
                    <h3>Quienes somos: </h3>
                    <div className="aboutUs">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </span>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={6} md={6} className="justify-content-md-center">
                <div className="footerContentRight">
                    <h3>Categorias: </h3>
                    <ul className="listServices">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Woman</li>
                    </ul>
                </div>
            </Col>
        </Row>
    </Container>
    <Container fluid className="footerContentCopyright">
        <p className="copyright">Ecommerce © 2021 | Diseñado por Luis Carlos Lugo</p>
    </Container>
    </>
  );
}

export default FooterPage;