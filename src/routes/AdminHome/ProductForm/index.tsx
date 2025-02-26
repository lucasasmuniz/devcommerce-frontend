import "./styles.css";

export default function ProductForm() {
    return (
        <main>
            <section id="product-form-section" className="devc-container devc-pd-top-20">
                <div className="devc-product-form-container devc-card">
                    <form className="devc-form-product">
                        <h2>Dados do produto</h2>
                        <div className="devc-form-control-container">
                            <div className="devc-form-email-container">
                                <input className="devc-form-input" type="text" placeholder="Nome" />
                                    <div className="devc-form-error"></div>
                            </div>
                            <div className="devc-form-price-container">
                                <input className="devc-form-input" type="number" placeholder="Preço" />
                                    <div className="devc-form-error"></div>
                            </div>
                            <div className="devc-form-image-container">
                                <input className="devc-form-input" type="text" placeholder="Imagem" />
                                    <div className="devc-form-error"></div>
                            </div>
                            <div className="devc-form-category-container">
                                <select className="devc-select devc-form-input" required>
                                    <option value="" disabled selected>Categorias</option>
                                    <option value="1">Valor1</option>
                                    <option value="2">Valor2</option>
                                </select>
                            </div>
                            <div className="devc-form-description-container">
                                <textarea className="devc-textarea devc-form-input" placeholder="Descrição"></textarea>
                            </div>
                        </div>
                        <div className="devc-form-btn-container">
                            <button type="reset" className="devc-btn devc-btn-white">Cancelar</button>
                            <button type="submit" className="devc-btn devc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}