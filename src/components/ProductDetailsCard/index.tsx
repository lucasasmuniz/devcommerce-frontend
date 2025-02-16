import "./styles.css";
import ProductCategory from '../ProductCategory';
import { ProductDTO } from "../../models/product";

type Props = {
    product:ProductDTO;
}

export default function ProductDetailsCard({product} : Props) {
    return (
        <div className="devc-card">
            <div className="devc-product-details-top devc-line-bottom">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="devc-product-details-bottom">
                <h2 className="devc-product-details-price">R$ {product.price.toFixed(2)}</h2>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="devc-product-details-tags-container">
                {
                        product.categories.map(x => (
                            <ProductCategory key={x.id} name={x.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}