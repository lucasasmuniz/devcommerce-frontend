import computerImg from "../../assets/computer.png";
import "./styles.css";
import ProductCategory from '../ProductCategory';

export default function ProductDetailsCard() {
    return (
        <div className="devc-card">
            <div className="devc-product-details-top devc-line-bottom">
                <img src={computerImg} alt="Computador Gamer XT" />
            </div>
            <div className="devc-product-details-bottom">
                <h2 className="devc-product-details-price">R$ 5000,00</h2>
                <h3>Computador Gamer XT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="devc-product-details-tags-container">
                    <ProductCategory />
                    <ProductCategory />
                </div>
            </div>
        </div>
    );
}