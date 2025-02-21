import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart : OrderDTO){
    const str = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, str);
}

export function get() : OrderDTO{
    const obj = JSON.parse(localStorage.getItem(CART_KEY) || '{"items" : []}');
    const cart = new OrderDTO();
    obj.items.forEach((item:any) => {
        cart.items.push(new OrderItemDTO(item.productId, item.quantity,item.name,item.price,item.imgUrl))
    })

    return cart;
}

export function clear(){
    localStorage.setItem(CART_KEY, '{"items" : []}');
}