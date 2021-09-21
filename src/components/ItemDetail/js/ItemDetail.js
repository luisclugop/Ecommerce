import React, { Component } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ItemDetail.css';
import ItemCount from "../../ItemCount/js/ItemCount";

class ItemDetail extends Component {
    render(){
        let { id, src, category, title, description, productReal, productDiscount } = this.props;
        return(
            <>
                <Container className="itemDetailContainerItemDescription">
                    <Row>
                        <Col xs={12} sm={12} md={5} className="justify-content-md-center">
                            <div className="ItemDescriptionImage">
                                <img src={ src } alt=""></img>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={7}>
                            <div className="ItemDescription">
                                <h3 className="ItemDescriptionTittle">{ title }</h3>
                                <div className="ItemDescriptionPrice">
                                    <small>{ productReal }</small>{ productDiscount }
                                </div>
                                <div className="ItemDescriptionResume">
                                    <p>{ description }</p>
                                </div>
                                <Row>
                                    <Col xs={3} sm={4} md={3}>
                                        <span>Color: </span>
                                    </Col>
                                    <Col xs={9} sm={8} md={9}>
                                        <div className="ItemDescriptionColors">
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                        </div>
                                    </Col>

                                    <Col xs={3} sm={4} md={3}>
                                        <div className="ItemDescriptionSize">
                                            <span>Talla: </span>
                                        </div>
                                    </Col>
                                    <Col xs={9} sm={8} md={9}>
                                        <div className="ItemDescriptionSize">
                                            <Form.Select size="sm" style={{ backgroundColor: 'rgba(0,0,0,0)', border: '1px solid #eee' }}>
                                                <option disabled>Selecciona tu talla:</option>
                                                <option value="1">Talla: XS</option>
                                                <option value="2">Talla: SM</option>
                                                <option value="3">Talla: MD</option>
                                                <option value="4">Talla: LG</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={3} sm={4} md={3}>
                                        <div className="ItemDescriptionQuantity">
                                            <span>Cantidad: </span>
                                        </div>
                                    </Col>
                                    <Col xs={9} sm={8} md={9}>
                                        <div className="ItemDescriptionQuantityBtn">
                                            <ItemCount />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>                    
                </Container>
            </>
        );
    }
}

export default ItemDetail;