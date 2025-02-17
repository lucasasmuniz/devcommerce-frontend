import "./styles.css";
import { ProductDTO } from "../../models/product";
import { Link } from "react-router-dom";

type Props = {
    product: ProductDTO;
}

export default function CatalogCard({product}:Props) {
    return (
        <Link to={`/product-details/${product.id}`}>
            <div className="devc-card">
                <div className="devc-catalog-card-top devc-line-bottom">
                    <img src={product.imgUrl} alt={product.name} />
                </div>
                <div className="devc-catalog-card-bottom">
                    <h2>R$ {product.price.toFixed(2)}</h2>
                    <h3>{product.name}</h3>
                </div>
            </div>
        </Link>
    );
}