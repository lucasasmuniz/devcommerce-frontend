/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderItemDTO } from "../../models/order";
import * as cartService from "../../services/cart-service.js"

type Props = {
  product: OrderItemDTO,
  setCart : any
};

export default function CardItemCard({ product,setCart }: Props) {
    
  function handleIncreaseItem(productId : number){
    cartService.increaseItem(productId);
    setCart(cartService.getCart);
  }

  function handleDecreaseItem(productId : number){
    cartService.decreaseItem(productId);
    setCart(cartService.getCart);
  }

  return (
    <div className="devc-cart-product devc-line-bottom">
      <div className="devc-cart-product-left">
        <img src={product.imgUrl} alt={product.name} />
        <div className="devc-cart-product-name-quantity">
          <h3>{product.name}</h3>
          <div className="devc-cart-item-quantity-container">
            <span onClick={() => handleDecreaseItem(product.productId)}>-</span>
            <p>{product.quantity}</p>
            <span onClick={() => handleIncreaseItem(product.productId)}>+</span>
          </div>
        </div>
      </div>
      <div className="devc-cart-product-right">
        <h4>R$ {product.subTotal.toFixed(2)}</h4>
      </div>
    </div>
  );
}
