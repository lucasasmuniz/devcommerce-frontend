import "./styles.css";

import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product.ts";
import * as productService from '../../../services/product-services.ts';

export default function Catalog() {
    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        productService.findAll()
            .then( (response) => {
                setProducts(response.data.content);
            })
    }, []);

    return (
        <main>
            <section id="catalog-section" className="devc-container devc-pd-top-20">
                <SearchBar />
                <div className="devc-catalog-container devc-mb-20">
                    {
                        products.map(product => <CatalogCard key={product.id} product={product} />)
                    }
                </div>
                <ButtonNextPage />
            </section>
        </main>
    );
}