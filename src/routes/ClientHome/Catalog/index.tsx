import "./styles.css";

import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as productService from "../../../services/product-services.ts"

export default function Catalog() {
    return (
        <main>
            <section id="catalog-section" className="devc-container devc-pd-top-20">
                <SearchBar />
                <div className="devc-catalog-container devc-mb-20">
                    {
                        productService.findAll().map(product => <CatalogCard key={product.id} product={product} />)
                    }
                </div>
                <ButtonNextPage />
            </section>
        </main>
    );
}