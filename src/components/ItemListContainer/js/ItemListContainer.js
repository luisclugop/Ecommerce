import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../../ItemList/js/ItemList';
import CarouselEcommerce from '../../Carousel/js/Carousel';
import '../css/ItemListContainer.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineFire, AiOutlineShopping, AiOutlineSync } from "react-icons/ai";
import Collections from "../../../views/Collections";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { database } from "../../../services/firebase/firebase";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    // const { category } = useParams()
    const { category } = useParams()
    // const [listProducto, setListProducto] = useState([])

    useEffect( () => {
        if(!category) {
            getDocs( collection(database, 'productos')).then((querySnapshot) => {
                const productos = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                // console.log(productos)
                setProductos(productos)
            }).catch((error) => {
                console.log('Error searching items', error)
            })
        } else {
            getDocs( query(collection(database, 'productos'), where('category', '==', category))).then( (querySnapshot) => {
                console.log(querySnapshot);
                const productos = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                // console.log(productos)
                setProductos(productos)
            }).catch((error) => {
                console.log('Error searching items', error)
            })
        }
    }, [category])

    if(productos.length === 0){
        return <h1>Cargando</h1>
    }

    // console.log(listProducto);

    return(
        <>
            <CarouselEcommerce />
            <Container fluid className="itemListContainerStyle" style={{ backgroundImage: "url(/img/backgrounds/background-collections.png)" }}>
                <h3 className="tittleListContainer">Top Productos</h3>
                <hr className="hrEcommerce"></hr>
                <ItemList 
                    productos={productos}
                />
                <div className="owlCarouselItemList">            
                    <OwlCarousel 
                        margin={20} 
                        autoplay={true}
                        loop={true}
                        responsiveClass={true}
                        speed={10000}
                        smartSpeed={5000}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            400: {
                                items: 2,
                            },
                            600: {
                                items: 2,
                            },
                            700: {
                                items: 3,
                            },
                            1000: {
                                items: 5,
                            }
                        }}
                    >
                        <div className="owlCarouselItemList">
                            <img className="owlCarouselItem" src="img/partners/1.png" alt="brand"></img>
                        </div>
                        <div className="owlCarouselItemList">
                            <img className="owlCarouselItem" src="img/partners/2.png" alt="brand"></img>
                        </div>
                        <div className="owlCarouselItemList">
                            <img className="owlCarouselItem" src="img/partners/3.png" alt="brand"></img>
                        </div>
                        <div className="owlCarouselItemList">
                            <img className="owlCarouselItem" src="img/partners/4.png" alt="brand"></img>
                        </div>
                        <div className="owlCarouselItemList">
                            <img className="owlCarouselItem" src="img/partners/7.png" alt="brand"></img>
                        </div>
                        <div className="owlCarouselItemList">
                            <img className="owlCarouselItem" src="img/partners/8.png" alt="brand"></img>
                        </div>
                    </OwlCarousel> 
                </div>
                <Row>
                    <Col xs={12} sm={12} md={12} className="justify-content-md-center">
                        <Container className="detailsEcommerce">
                            <h3 className="tittleListContainer">Contamos con:</h3>
                            <hr className="hrEcommerce"></hr>
                            <Row>
                                <Col xs={12} sm={6} md={4} className="justify-content-md-center">
                                    <Container className="iconBox text-center">
                                        <div className="iconBoxIcon">
                                            <AiOutlineFire />
                                        </div>
                                        <div className="iconBoxContent">
                                            <h4 className="tittleListContainer">Productos más trend</h4>
                                            <p>Envio gratis en compra mayor de $50</p>
                                        </div>
                                    </Container>
                                </Col>
                                <Col xs={12} sm={6} md={4} className="justify-content-md-center">
                                    <Container className="iconBox text-center">
                                        <div className="iconBoxIcon">
                                            <AiOutlineSync />
                                        </div>
                                        <div className="iconBoxContent">
                                            <h4 className="tittleListContainer">Devolución segura</h4>
                                            <p>Devoluciones por problemas con el producto y cambio del mismo</p>
                                        </div>
                                    </Container>
                                </Col>
                                <Col xs={12} sm={12} md={4} className="justify-content-md-center">
                                    <Container className="iconBox text-center">
                                        <div className="iconBoxIcon">
                                            <AiOutlineShopping />
                                        </div>
                                        <div className="iconBoxContent">
                                            <h4 className="tittleListContainer">Compra Segura</h4>
                                            <p>Contamos con un equipo de soporte, y lás mejores funciones de seguridad para tu compra</p>
                                        </div>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container> 
            <Collections />
        </>
    );
    
}

export default ItemListContainer;