import React from "react";
import '../css/Stripe.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../Button/js/Button';

const Stripe = () => {
    return(
        <Container fluid className="stripe" style={{ backgroundImage: "url(/img/backgrounds/stripe.jpg)" }}>
            <div className="stripeContentDetails">
                <h3>Inscribete y obten 10% de descuento</h3>
                <p>Ecommerce la mejor tienda de ropa</p>
            </div>
            <div className="stripeContentButton">
                <Button className="btnStripe" title="Inscribete aquí" task={'#'} />
            </div>
        </Container>
                
    );
}

export default Stripe;