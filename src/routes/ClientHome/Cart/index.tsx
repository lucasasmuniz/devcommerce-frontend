import "./styles.css";

const cart = {
  items: [
    {
      productId: 4,
      quantity: 1,
      name: "PC Gamer",
      price: 1200,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg",
    },
    {
      productId: 5,
      quantity: 2,
      name: "Rails for Dummies",
      price: 100.99,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg",
    },
  ],
};

export default function Cart() {
  return (
    <main>
      <section
        id="product-cart-section"
        className="devc-container devc-pd-top-20"
      >
        <div className="devc-card">
          {cart.items.map((item) => (
            <div className="devc-cart-product devc-line-bottom">
              <div className="devc-cart-product-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="devc-cart-product-name-quantity">
                  <h3>{item.name}</h3>
                  <div className="devc-cart-item-quantity-container">
                    <span>-</span>
                    <p>{item.quantity}</p>
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div className="devc-cart-product-right">
                <h4>R$ {item.price.toFixed(2)}</h4>
              </div>
            </div>
          ))}
          <div className="devc-cart-total-price">
            <h3>R$ 15000,00</h3>
          </div>
        </div>
        <div className="devc-btn-container devc-mt-20">
          <div className="devc-btn devc-btn-blue">Finalizar pedido</div>
          <div className="devc-btn devc-btn-white">Continuar comprando</div>
        </div>
      </section>
    </main>
  );
}
