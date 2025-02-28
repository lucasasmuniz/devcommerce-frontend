import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonInverse from "../../../components/ButtonInverse";
import FormInput from "../../../components/FormInput";
import * as forms from '../../../utils/forms.ts';
import * as productService from '../../../services/product-services.ts';

export default function ProductForm() {

    const params = useParams();

    const isEditing = params.productId !== "create";

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (name: string) {
                return name.length >= 3 && name.length <= 80;
            },
            message: "Favor informar um nome de 3 a 80 caracteres"
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function (value: any) {
                return Number(value) > 0;
            },
            message: "Favor informar um valor positivo"
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        }
    })

    useEffect(() => {
        if (isEditing) {
            productService.findById(Number(params.productId))
                .then((response) => {
                    setFormData(forms.updateAll(formData, response.data))
                })
        }
    }, [])

    function handleOnChangeInput(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string){
        setFormData(forms.toDirtyAndValidate(formData, name));
    }

    return (
        <main>
            <section id="product-form-section" className="devc-container devc-pd-top-20">
                <div className="devc-product-form-container devc-card">
                    <form className="devc-form-product">
                        <h2>Dados do produto</h2>
                        <div className="devc-form-control-container">
                            <div className="devc-mb-20">
                                <FormInput
                                    {...formData.name}
                                    className="devc-form-input"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleOnChangeInput}
                                />
                            </div>
                            <div className="devc-mb-20">
                                <FormInput
                                    {...formData.price}
                                    className="devc-form-input"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleOnChangeInput}
                                />
                                <p className="devc-form-error">{formData.price.message}</p>
                            </div>
                            <div className="devc-mb-20">
                                <FormInput
                                    {...formData.imgUrl}
                                    className="devc-form-input"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleOnChangeInput}
                                />
                            </div>
                        </div>
                        <div className="devc-form-btn-container">
                            <div>
                                <Link to={"/admin/products"}>
                                    <ButtonInverse text="Cancelar" />
                                </Link>
                            </div>
                            <button type="submit" className="devc-btn devc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}