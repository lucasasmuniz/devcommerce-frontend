import "./styles.css";

import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";

export default function Catalog() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="devc-container devc-pd-top-20">
                    <SearchBar />
                    <div className="devc-catalog-container devc-mb-20">
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        
                    </div>
                    <ButtonNextPage />
                </section>
            </main>
        </>
    );
}