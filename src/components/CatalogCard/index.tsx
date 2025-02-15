import "./styles.css";
import computerImg from "../../assets/computer.png";

export default function CatalogCard() {
    return (
        <div className="devc-card">
            <div className="devc-catalog-card-top devc-line-bottom">
                <img src={computerImg} alt="Computador Gamer XT" />
            </div>
            <div className="devc-catalog-card-bottom">
                <h2>R$ 5000,00</h2>
                <h3>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h3>
            </div>
        </div>
    );
}