import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/js/ItemDetail";
import '../css/ItemDetailContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doc, getDoc } from "@firebase/firestore";
import { database } from "../../../services/firebase/firebase";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(undefined)
    const { id } = useParams()
    // const [listItem, setListItem] = useState(undefined)

    useEffect( () => {
        getDoc(doc(database, 'productos', id)).then( (querySnapshot) => {
            console.log( {id: querySnapshot.id, ...querySnapshot.data()})
            const producto = { id: querySnapshot.id, ...querySnapshot.data()}
            setProducto(producto)
        }).catch((error) => {
            console.log('Error searching items', error)
        })
        return( () => {
            setProducto(undefined)
        })
    }, [id])
    
    return(
        <>
            <div className="itemDetailContainer">
                <Container className="itemDetailContainerItem">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={12}>
                            <ItemDetail
                                item={producto}
                                itemId={id}
                            />
                        </Col>
                    </Row>                    
                </Container>
            </div>
        </>
    ); 
};

export default ItemDetailContainer;