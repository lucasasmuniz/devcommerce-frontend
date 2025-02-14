import computerImg from './assets/computer.png';
import cartImg from './assets/cart.svg';
import './App.css'

function App() {
  return (
    <>
    <header className="devc-header-client">
        <nav className="devc-container">
            <h1>DevCommerce</h1>
            <div>
                <img className="devc-item-nav" src={cartImg} alt="Carrinho de compras"/>
                <a className="devc-item-nav devc-sign-in-link" href="#">Entrar</a>
            </div>
        </nav>
    </header>

    <main>
        <section id="product-details-section" className="devc-container devc-pd-top-20">
            <div className="devc-card">
                <div className="devc-product-details-top devc-line-bottom">
                    <img src={computerImg} alt="Computador Gamer XT"/>
                </div>
                <div className="devc-product-details-bottom">
                    <h2 className="devc-product-details-price">R$ 5000,00</h2>
                    <h3>Computador Gamer XT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="devc-product-details-tags-container">
                        <h2 className="devc-product-details-tags">Eletrônicos</h2>
                        <h2 className="devc-product-details-tags">Computadores</h2>
                    </div>
                </div>
            </div>
            <div className="devc-btn-container devc-mt-20">
                <div className="devc-btn devc-btn-blue">Comprar</div>
                <div className="devc-btn devc-btn-white">Início</div>
            </div>
        </section>
    </main>
    </>
  );
}

export default App
