import { useContext, useState } from "react";
import "./styles.css";
import * as cartService from "../../../services/cart-service.ts";
import * as orderService from "../../../services/order-service.ts";
import { OrderDTO } from "../../../models/order.ts";
import { Link, useNavigate } from "react-router-dom";
import CardItemCard from "../../../components/CartItemsCard/index.tsx";
import ButtonInverse from "../../../components/ButtonInverse/index.tsx";
import ButtonPrimary from "../../../components/ButtonPrimary/index.tsx";
import { ContextCartCount } from "../../../utils/context-cart.ts";

export default function Cart() {

  const navigate = useNavigate();

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  const { setContextCartCount } = useContext(ContextCartCount);

  function handleClearCart() {
    cartService.clearCart();
    setContextCartCount(cartService.getCart().items.length);
    setCart(cartService.getCart());
  }

  function handleCartItemChange(cart: OrderDTO) {
    setCart(cart);

    const newCart = cartService.getCart();
    setContextCartCount(newCart.items.length);
  }

  function handleConfirmOrder(event: any) {
    event.preventDefault();
    orderService.confirmOrderRequest(cart)
      .then(response => {
        cartService.clearCart();
        setContextCartCount(0);
        navigate(`/confirmation/${response.data.id}`);
      })
      .catch(error => {
        console.log("error", error);
      })
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
              <CardItemCard product={item} key={item.productId} onCartItemChange={handleCartItemChange} />
            ))}
            <div className="devc-cart-total-price">
              <h3>R$ {cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}
        <div className="devc-btn-container devc-mt-20">
          <div onClick={handleConfirmOrder}>
            <ButtonPrimary text={"Finalizar pedido"} />
          </div>
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
