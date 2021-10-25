import React, { useContext } from "react";
import Context from "../../../context/Context";
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Cart.css';
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from "../../Button/js/Button";
import { collection, addDoc, getDoc, doc, Timestamp, writeBatch } from 'firebase/firestore';
import { database } from "../../../services/firebase/firebase";

const Cart = () => {

    const { cartProducts, setCartProducts, getCount, getTotal, getTotalIva } = useContext(Context);

    function removeItem(product) {
        setCartProducts(cartProducts.filter(item => item !== product))
        // setTotal(total-total)
    }

    function payProducts(){
        console.log("Pagando Productos")

        const buyer = {
            name: "Luis Carlos",
            phone: 7711234567,
            email: "email@email.com", 
            items: cartProducts,
            price: getTotalIva(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(database)
        const outOfStock = []
        // setCartProducts([])
        console.log(buyer)

        buyer.items.forEach( (prod, i) => {
            getDoc(doc(database, 'productos', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= buyer.items[i].count) {
                    batch.update(doc(database, 'productos', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - buyer.items[i].count
                    })
                } else {
                    outOfStock.push({ ...DocumentSnapshot.data(), id: DocumentSnapshot.id })
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(database, 'orders'), buyer).then( () => {
                batch.commit().then( () => {
                    alert("Se han comprado los productos")
                    setCartProducts([])
                })
            }).catch( (error) => {
                alert("Error al comprar los productos")
            })
        } else {
            alert("No hay stock de productos")
        }
    }

    if(getCount() === 0){
        return <Container fluid style={{ backgroundImage: "url(/img/backgrounds/background-collections.png)", height: "60vh" }}>
            <div className="cartDesignNone">
                <div className="cartDesignNoneIcon">
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </div>
                <div className="cartDesignNoneDescription">
                    <p>No hay productos agregados al carrito</p>
                    <br />
                    <Link to='/'> Regresar al Inicio </Link>
                </div>
            </div>
        </Container>
    }

    return(
        <>
            <Container fluid className="cartStyle" style={{ backgroundImage: "url(/img/backgrounds/background-collections.png)" }}>
                <Row>
                    <Col xs={12} sm={12} md={12} className="justify-content-md-center">
                        <Container fluid className="cartDesign">
                            <h3 className="tittleCart">Carrito</h3>
                            <hr></hr>
                            <Row>
                                {/* Table Cart */}
                                <Col xs={12} sm={12} md={8} className="justify-content-md-center">
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Titulo</th>                                                
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { cartProducts.map((producto) => {
                                            return(
                                                <tr key={producto?.id}>
                                                    <td>
                                                        <div className="CartImage">
                                                            <img src={producto.src} alt={producto.src}></img>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cartTittle">
                                                            <span className="tittleCart">{producto.title}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cartDescription">
                                                            <span className="descriptionCart">${producto.productDiscount}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cartDescription">
                                                            <span className="descriptionCart">{producto.count}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cartDescription">
                                                            <span className="descriptionCart">${ producto.productDiscount * producto.count }</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cartDescription">
                                                            <span className="descriptionActionCart" onClick={ () => removeItem(producto)}><AiOutlineClose /></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }                                            
                                        )}                                            
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col xs={12} sm={12} md={4} className="justify-content-md-center">
                                    <div className="cartTotalProducts">
                                        <p className="tittleCart">Total Carrito</p>
                                        <hr></hr>
                                        <div className="cartSubTotalProducts">
                                            <p className="tittleCart">SubTotal:</p>
                                            <p className="tittleCart">${ getTotal() }</p>
                                        </div>                   
                                        <hr></hr>
                                        <div className="cartSubTotalProducts">
                                            <p className="tittleCart">+Iva</p>
                                            <p className="tittleCart">16%</p>
                                        </div>                   
                                        <hr></hr>
                                        <div className="cartSubTotalProducts">
                                            <p className="tittleCart totalProceedPay">Total:</p>
                                            <p className="tittleCart totalProceedPay">${ getTotalIva() }</p>
                                        </div>
                                        <div className="cartSubTotalProductsPay" style={{ float: "center"}}>
                                            <Button className="btnLeft" title="Proceder a Pagar" task={ () => payProducts()} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cart;