import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails(){
    return (
        <>
            <HeaderClient />

            <main>
                <section id="product-details-section" className="devc-container devc-pd-top-20">
                    <ProductDetailsCard />
                    <div className="devc-btn-container devc-mt-20">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>
                </section>
            </main>
        </>
    );
}