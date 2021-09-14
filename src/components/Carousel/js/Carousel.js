import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Carousel.css';

const CarouselEcommerce = () => {
    return(
        <Carousel className="CarouselDiv">

            <Carousel.Item className="CarouselItem" style={{ backgroundImage: "url(/img/carousel/carousel-1.jpg)" }}>
                <Carousel.Caption>
                <p className="CarouselItemTittle">¡Crea tu propio estilo!</p>
                <p className="CarouselItemDescription">¡Tu ropa... Tus reglas!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="CarouselItem" style={{ backgroundImage: "url(/img/carousel/carousel-2.jpg)" }}>
            </Carousel.Item>

        </Carousel>
    );
}

export default CarouselEcommerce;