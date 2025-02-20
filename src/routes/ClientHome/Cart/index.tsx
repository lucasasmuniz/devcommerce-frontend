import { useEffect, useState } from "react";
import "./styles.css";
import * as cartService from "../../../services/cart-service.ts";
import { OrderDTO } from "../../../models/order.ts";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  useEffect(() => {});

  return (
    <main>
      <section
        id="product-cart-section"
        className="devc-container devc-pd-top-20"
      >
        {cart.items.length === 0 ? (
          <h2 className="devc-section-title">Carrinho vazio</h2>
        ) : (
          <div className="devc-card">
            {cart.items.map((item) => (
              <div className="devc-cart-product devc-line-bottom">
                <div className="devc-cart-product-left">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="devc-cart-product-name-quantity">
                    <h3>{item.name}</h3>
                    <div className="devc-cart-item-quantity-container">
                      <span>-</span>
                      <p>{item.quantity}</p>
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <div className="devc-cart-product-right">
                  <h4>R$ {item.subTotal.toFixed(2)}</h4>
                </div>
              </div>
            ))}
            <div className="devc-cart-total-price">
              <h3>R$ {cart.total}</h3>
            </div>
          </div>
        )}
        <div className="devc-btn-container devc-mt-20">
          <div className="devc-btn devc-btn-blue">Finalizar pedido</div>
          <Link to="/">
            <div className="devc-btn devc-btn-white">Continuar comprando</div>
          </Link>
            <div className="devc-btn devc-btn-white">Limpar</div>
        </div>
      </section>
    </main>
  );
}
