import "./styles.css";
import cartIcon from '../../assets/cart.svg';
import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon(){

      const {contextCartCount} = useContext(ContextCartCount); 

    return(
        <>
        <div className="devc-cart-icon-container">
            <img className="devc-item-nav devc-mr-20" src={cartIcon} alt="Carrinho de compras" />
            {
                contextCartCount > 0 &&
                <div className='devc-cart-notification'>{contextCartCount}</div>
            }
        </div>
        </>
    );
}