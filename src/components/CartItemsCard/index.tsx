import { OrderItemDTO } from "../../models/order";
import * as cartService from "../../services/cart-service.js"

type Props = {
  product: OrderItemDTO,
  onCartItemChange : any
};

export default function CardItemCard({ product,onCartItemChange }: Props) {
    
  function handleIncreaseItem(productId : number){
    cartService.increaseItem(productId);
    onCartItemChange(cartService.getCart);
  }

  function handleDecreaseItem(productId : number){
    cartService.decreaseItem(productId);
    onCartItemChange(cartService.getCart);
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
