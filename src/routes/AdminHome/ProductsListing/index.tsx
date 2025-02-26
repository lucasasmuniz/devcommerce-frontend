import './styles.css';

import SearchBar from "../../../components/SearchBar";
import penIcon from '../../../assets/pen.svg';
import trashIcon from '../../../assets/trash.svg';
import computerImg from '../../../assets/computer.png';


export default function ProductsListing() {

    function handleOnSearch(){

    }

    return(
        <main>
        <section id="product-listing-section" className="devc-container devc-pd-top-20">
            <div className="devc-section-title devc-mb-20">
                <h2>Cadastro dos produtos</h2>
            </div>
            <div className="devc-btn-container devc-mb-20 ">
                <div className="devc-btn devc-btn-white">Início</div>
            </div>
            <SearchBar onSearch={handleOnSearch}/>

            <table className="devc-table devc-mb-20 devc-mt-20">
                <thead>
                    <th className="devc-tb-576">ID</th>
                    <th></th>
                    <th className="devc-tb-768">Preço</th>
                    <th className="dsc-txt-left">Nome</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td className="devc-tb-576">341</td>
                        <td><img className="devc-product-listing-img" src={computerImg} alt="Computer" /></td>
                        <td className="devc-tb-768">R$ 5000,00</td>
                        <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
                        <td><img className="devc-product-listing-btn" src={penIcon} alt="Editar" /></td>
                        <td><img className="devc-product-listing-btn" src={trashIcon} alt="Apagar" /></td>
                    </tr>
                    <tr>
                        <td className="devc-tb-576">341</td>
                        <td><img className="devc-product-listing-img" src={computerImg} alt="Computer" /></td>
                        <td className="devc-tb-768">R$ 5000,00</td>
                        <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
                        <td><img className="devc-product-listing-btn" src={penIcon} alt="Editar" /></td>
                        <td><img className="devc-product-listing-btn" src={trashIcon} alt="Apagar" /></td>
                    </tr>
                    <tr>
                        <td className="devc-tb-576">341</td>
                        <td><img className="devc-product-listing-img" src={computerImg} alt="Computer" /></td>
                        <td className="devc-tb-768">R$ 5000,00</td>
                        <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
                        <td><img className="devc-product-listing-btn" src={penIcon} alt="Editar" /></td>
                        <td><img className="devc-product-listing-btn" src={trashIcon} alt="Apagar" /></td>
                    </tr>
                </tbody>

            </table>
            
            <div className="devc-btn-next-page">
                Carregar mais
            </div>
        </section>
    </main>

    );
}