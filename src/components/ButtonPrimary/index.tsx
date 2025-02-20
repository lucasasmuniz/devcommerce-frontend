import "./styles.css";
import { ProductDTO } from "../../models/product";
import * as cartService from "../../services/cart-service.js"
import { useNavigate } from "react-router-dom";

type Props = {
    text : string,
    product: ProductDTO
}

export default function ButtonPrimary({text, product}:Props){
    const navigate = useNavigate();

    function handleBuyProduct(){
        cartService.addProduct(product);
        navigate('/cart')
    }

    return(
        <div onClick={handleBuyProduct} className="devc-btn devc-btn-blue">{text}</div>
    );
}