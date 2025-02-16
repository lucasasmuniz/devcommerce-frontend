import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "TV muito bonita",
    price: 2999.90,
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Televisões"
        },
        {
            id: 1,
            name: "Importados"
        }
    ]
}

export default function ProductDetails(){
    return (
        <>
            <HeaderClient />

            <main>
                <section id="product-details-section" className="devc-container devc-pd-top-20">
                    <ProductDetailsCard product ={product}/>
                    <div className="devc-btn-container devc-mt-20">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>
                </section>
            </main>
        </>
    );
}