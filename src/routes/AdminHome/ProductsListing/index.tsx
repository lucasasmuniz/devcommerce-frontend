import './styles.css';

import SearchBar from "../../../components/SearchBar";
import penIcon from '../../../assets/pen.svg';
import trashIcon from '../../../assets/trash.svg';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-services';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { Link } from 'react-router-dom';
import ButtonInverse from '../../../components/ButtonInverse';
import DialogInfo from '../../../components/DialogInfo';
import DialogConfirmation from '../../../components/DialogConfirmation';

type QueryParams = {
    page: number,
    name: string
}

export default function ProductsListing() {

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        name: "",
        page: 0
    })

    const [dialogInfoData, setDialogInfoData] = useState({
        visiable: false,
        message: "Operação com sucesso!"
    })

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        productId: 0,
        visiable: false,
        message: "Tem Certeza?"
    })

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then((response) => {
                const nextPage = response.data.content;
                setProducts(products.concat(nextPage));
                setIsLastPage(response.data.last);
            })
    }, [queryParams]);

    function handleSearch(searchInput: string) {
        setProducts([]);
        setQueryParams({ ...queryParams, name: searchInput, page: 0 });
    }

    function handleNextPageClick() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }

    function handleDialogInfoClose() {
        setDialogInfoData({ ...dialogInfoData, visiable: false });
    }

    function handleOnClickDelete(productId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, visiable: true, productId })
    }

    function handleDialogConfirmAnswer(answer: boolean, productId: number) {
        if (answer) {
            productService.deleteById(productId)
                .then(() => {
                    setProducts([]);
                    setQueryParams({ ...queryParams, page: 0 });
                })
                .catch(error => {
                    setDialogInfoData({...dialogInfoData, message: error.response.data.error, visiable: true});
                })
        }
        setDialogConfirmationData({ ...dialogConfirmationData, visiable: false })
    }

    return (
        <>
            <main>
                <section id="product-listing-section" className="devc-container devc-pd-top-20">
                    <div className="devc-section-title devc-mb-20">
                        <h2>Cadastro dos produtos</h2>
                    </div>
                    <div className="devc-btn-container devc-mb-20 ">
                        <Link to="/admin/products/create">
                            <ButtonInverse text={"Novo"} />
                        </Link>
                    </div>
                    <SearchBar onSearch={handleSearch} />

                    <table className="devc-table devc-mb-20 devc-mt-20">
                        <thead>
                            <tr>
                                <th className="devc-tb-576">ID</th>
                                <th></th>
                                <th className="devc-tb-768">Preço</th>
                                <th className="dsc-txt-left">Nome</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(item => (
                                    <tr key={item.id}>
                                        <td className="devc-tb-576">{item.id}</td>
                                        <td><img className="devc-product-listing-img" src={item.imgUrl} alt={item.name} /></td>
                                        <td className="devc-tb-768">R$ {item.price}</td>
                                        <td className="dsc-txt-left">{item.name}</td>
                                        <td><img className="devc-product-listing-btn" src={penIcon} alt="Editar" /></td>
                                        <td><img className="devc-product-listing-btn" onClick={() => handleOnClickDelete(item.id)} src={trashIcon} alt="Apagar" /></td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>

                    {
                        !isLastPage &&
                        <div onClick={handleNextPageClick}>
                            <ButtonNextPage />
                        </div>
                    }

                </section>
            </main>

            {
                dialogInfoData.visiable &&
                <DialogInfo message={dialogInfoData.message} onDialogClose={handleDialogInfoClose} />
            }
            {
                dialogConfirmationData.visiable &&
                <DialogConfirmation message={dialogConfirmationData.message} onDialogAnswer={handleDialogConfirmAnswer} productId={dialogConfirmationData.productId} />
            }
        </>
    );
}