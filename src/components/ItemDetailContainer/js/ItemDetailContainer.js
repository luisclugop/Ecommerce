import React, { useState, useEffect } from "react";
import ItemDetail from "../../ItemDetail/js/ItemDetail";
import '../css/ItemDetailContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
    {
        id:'1', 
        src:'https://tumerchan.com/wp-content/uploads/2021/04/sudadera-manu-cort-negra.png',
        category:'Men,sweatshirt',
        title:'Men Black Sweatshirt',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!',
        productReal:'$96.00',
        productDiscount:'$89.99' 
    }
];

function getItem(){
    return new Promise( (resolve, reject) => {
        resolve(items)
    });
}

const ItemDetailContainer = () => {

    const [listItem, setListItem] = useState([])

    useEffect( () => {
        const item = getItem()

        item.then(item => {
            setListItem(item)
        })
    }, [])
    
    return(
        <>
            <div className="itemDetailContainer">
                { listItem.map(item => 
                    <Container className="itemDetailContainerItem" key={item.id}>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={12}>
                                <ItemDetail 
                                    src={item?.src}
                                    category={item?.category}
                                    title={item?.title}
                                    description={item?.description}
                                    productReal={item?.productReal}
                                    productDiscount={item?.productDiscount}
                                />
                            </Col>
                        </Row>                    
                    </Container>
                )}
            </div>
        </>
    ); 
}

export default ItemDetailContainer;