import "./styles.css";

import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
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

export default function Catalog() {
    return (
        <main>
            <section id="catalog-section" className="devc-container devc-pd-top-20">
                <SearchBar />
                <div className="devc-catalog-container devc-mb-20">
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                </div>
                <ButtonNextPage />
            </section>
        </main>
    );
}