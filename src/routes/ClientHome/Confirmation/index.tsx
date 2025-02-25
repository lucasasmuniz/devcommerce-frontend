import './styles.css';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OrderDTO } from "../../../models/order";
import * as orderService from '../../../services/order-service';
import { Link } from "react-router-dom";

export default function Confirmation() {

    const params = useParams();

    const [order, setOrder] = useState<OrderDTO>();

    useEffect(() => {
        orderService.findByOrderId(Number(params.orderId))
            .then(response => {
                setOrder(response.data);
            })
            .catch(error => {
                console.log("error", error);
            })
    }, [])

    return (
        <main>
            <section id="product-cart-section" className="devc-container devc-pd-top-20">
                <div className="devc-card">
                    {
                        order &&
                        order.items.map(item => (
                            <div key={item.productId} className="devc-cart-product devc-line-bottom">
                                <div className="devc-cart-product-left">
                                    <img src={item.imgUrl} alt={item.name} />
                                    <div className="devc-cart-product-name-quantity">
                                        <h3>{item.name}</h3>
                                        <div className="devc-cart-item-quantity-container">
                                            <p>{item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="devc-cart-product-right">
                                    <h4>R$ {item.subTotal.toFixed(2)}</h4>
                                </div>
                            </div>
                        ))
                    }
                    <div className="devc-cart-total-price">
                        <h3>R$ {order?.total.toFixed(2)}</h3>
                    </div>
                </div>
                <div className="devc-order-confirmation devc-mt-20">Pedido realizado! Número {order?.id}</div>
                <div className="devc-btn-container devc-mt-20">
                    <Link to="/catalog">
                        <div className="devc-btn devc-btn-white">Início</div>
                    </Link>
                </div>
            </section>
        </main>
    );
}