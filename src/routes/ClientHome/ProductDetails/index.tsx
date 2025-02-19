import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product.ts";
import { useEffect, useState } from "react";
import * as productService from '../../../services/product-services.ts';

export default function ProductDetails() {

    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        productService.findById(Number(params.productId))
            .then( (response) => {
                setProduct(response.data);
            })
            .catch(() => {
                navigate("/");
            })
    }, []);

    return (
        <main>
            <section id="product-details-section" className="devc-container devc-pd-top-20">
                {
                    product &&
                    <ProductDetailsCard product={product} />
                }
                <div className="devc-btn-container devc-mt-20">
                    <ButtonPrimary text={"Comprar"} />
                    <Link to="/">
                        <ButtonInverse text={"Início"} />
                    </Link>
                </div>
            </section>
        </main>
    );
}