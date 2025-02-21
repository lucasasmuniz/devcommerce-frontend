import "./styles.css";

import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product.ts";
import * as productService from '../../../services/product-services.ts';

type QueryParams = {
    page:number,
    name:string
}

export default function Catalog() {
    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        name: "",
        page: 0
    })

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then( (response) => {
                const nextPage = response.data.content
                setProducts(products.concat(nextPage));
                setIsLastPage(response.data.last);
            })
    }, [queryParams]);

    function handleSearch(searchInput : string){
        setProducts([]);
        setQueryParams({...queryParams, name:searchInput, page:0})
    }

    function handleNextPageClick(){
        setQueryParams({...queryParams ,page:queryParams.page + 1})
    }

    return (
        <main>
            <section id="catalog-section" className="devc-container devc-pd-top-20">
                <SearchBar onSearch={handleSearch}/>
                <div className="devc-catalog-container devc-mb-20">
                    {
                        products.map(product => <CatalogCard key={product.id} product={product} />)
                    }
                </div>

                    {
                       !isLastPage &&
                        <div onClick={handleNextPageClick}>
                            <ButtonNextPage />
                        </div>
                       
                    }
            </section>
        </main>
    );
}