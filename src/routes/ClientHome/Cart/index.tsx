import { useState } from "react";
import "./styles.css";
import * as cartService from "../../../services/cart-service.ts";
import { OrderDTO } from "../../../models/order.ts";
import { Link } from "react-router-dom";
import CardItemCard from "../../../components/CartItemsCard/index.tsx";
import ButtonInverse from "../../../components/ButtonInverse/index.tsx";
import ButtonPrimary from "../../../components/ButtonPrimary/index.tsx";

export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  function handleClearCart(){
    cartService.clearCart();
    setCart(cartService.getCart);
  }

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
              <CardItemCard product={item} setCart={setCart}/>
            ))}
            <div className="devc-cart-total-price">
              <h3>R$ {cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}
        <div className="devc-btn-container devc-mt-20">
          <ButtonPrimary text={"Finalizar pedido"} />
          <Link to="/">
            <ButtonInverse text={"Continuar comprando"} />
          </Link>
          <div onClick={handleClearCart}>
            <ButtonInverse text={"Limpar"} />
          </div>
        </div>
      </section>
    </main>
  );
}
