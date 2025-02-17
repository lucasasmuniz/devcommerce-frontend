import "./styles.css";
import { ProductDTO } from "../../models/product";

type Props = {
    product: ProductDTO;
}

export default function CatalogCard({product}:Props) {
    return (
        <div className="devc-card">
            <div className="devc-catalog-card-top devc-line-bottom">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="devc-catalog-card-bottom">
                <h2>R$ {product.price.toFixed(2)}</h2>
                <h3>{product.name}</h3>
            </div>
        </div>
    );
}