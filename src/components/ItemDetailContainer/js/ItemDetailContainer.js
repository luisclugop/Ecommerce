import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/js/ItemDetail";
import '../css/ItemDetailContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const getItem = () => {
    return new Promise( (resolve, reject) => {
        const productos = [
            {id: 1, badge:'Hot', src:'https://tumerchan.com/wp-content/uploads/2021/04/sudadera-manu-cort-negra.png', category:'Men,sweatshirt', titleUrl:'https://tumerchan.com/wp-content/uploads/2021/04/sudadera-manu-cort-negra.png', title:'Men Black Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99', stock:25 },
            {id: 2, badge:'Hot', src:'http://kaurisport.com/wp-content/uploads/web_sudaderagris_capuchabolsillocanguro.png', category:'Men,sweatshirt', titleUrl:'http://kaurisport.com/wp-content/uploads/web_sudaderagris_capuchabolsillocanguro.png', title:'Men Black Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99', stock:25 },
            {id: 3, badge:'Hot', src:'https://pngimage.net/wp-content/uploads/2018/06/sudadera-blanca-png-.png', category:'Men,Sweatshirt', titleUrl:'https://pngimage.net/wp-content/uploads/2018/06/sudadera-blanca-png-.png', title:'Men White Sweatshirt', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!', productReal:'$96.00', productDiscount:'$89.99', stock:25 }
        ];

        setTimeout( () => resolve(productos), 1000 )
    });
}

const ItemDetailContainer = ({ productsAdded, addProductFunction }) => {
    const { id } = useParams()
    const [listItem, setListItem] = useState(undefined)

    useEffect( () => {
        const item = getItem()
        item.then(result => {
            const listItem = result.find(producto => producto.id === Number(id))
            setListItem(listItem)
            // console.log(listItem);
        })
        return( () => {
            setListItem(undefined)
        })
    }, [id])
    
    return(
        <>
            <div className="itemDetailContainer">
                <Container className="itemDetailContainerItem">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={12}>
                            <ItemDetail
                                item={listItem}
                                itemId={id}
                                productsAdded={productsAdded}
                                addProductFunction={addProductFunction}
                            />
                        </Col>
                    </Row>                    
                </Container>
            </div>
        </>
    ); 
};

export default ItemDetailContainer;