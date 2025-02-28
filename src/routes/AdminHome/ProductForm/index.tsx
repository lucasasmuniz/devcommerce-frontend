import "./styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonInverse from "../../../components/ButtonInverse";
import FormInput from "../../../components/FormInput";
import * as forms from '../../../utils/forms.ts';
import * as productService from '../../../services/product-services.ts';
import * as categoryService from '../../../services/category-service.ts';
import FormTextArea from "../../../components/FormTextArea/index.tsx";
import { CategoryDTO } from "../../../models/category.ts";
import FormSelect from "../../../components/FormSelect/index.tsx";
import { selectStyles } from "../../../utils/select.ts";

export default function ProductForm() {

    const navigate = useNavigate();

    const params = useParams();

    const isEditing = params.productId !== "create";

    const [categories, setCategories] = useState<CategoryDTO[]>([]);

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
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function (name: string) {
                return name.length >= 10;
            },
            message: "Favor informar uma descrição com ao menos 10 caracteres"
        },
        categories: {
            value: [],
            id: "categories",
            name: "categories",
            placeholder: "Categorias",
            validation: function (value: CategoryDTO[]) {
                return value.length > 0;
            },
            message: "Favor informar ao menos 1 categoria"
        },
    })

    useEffect(() => {
        categoryService.findAll()
            .then(response => {
                setCategories(response.data);
            })
    }, [])

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

    function handleTurnDirty(name: string) {
        setFormData(forms.toDirtyAndValidate(formData, name));
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        const newFormData = forms.toDirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(newFormData)) {
            setFormData(newFormData);
            return
        }

        const requestBody = forms.toValues(formData);

        if (isEditing) {
            requestBody.id = params.productId;
        }

        const request = isEditing
            ? productService.updateProduct(requestBody)
            : productService.saveProduct(requestBody);

        request
            .then(() => {
                navigate("/admin/products");
            })
            .catch(error => {
                const newFormData = forms.setBackendErrors(formData, error.response.data.errors);
                setFormData(newFormData);
            })

    }

    return (
        <main>
            <section id="product-form-section" className="devc-container devc-pd-top-20">
                <div className="devc-product-form-container devc-card">
                    <form className="devc-form-product" onSubmit={handleSubmit}>
                        <h2>Dados do produto</h2>
                        <div className="devc-form-control-container">
                            <div className="devc-mb-20">
                                <FormInput
                                    {...formData.name}
                                    className="devc-form-input"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleOnChangeInput}
                                />
                                <p className="devc-form-error">{formData.name.message}</p>
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
                            <div className="devc-mb-20">
                                <FormSelect
                                    {...formData.categories}
                                    options={categories}
                                    onChange={(obj: any) => {
                                        const newFormData = forms.updateAndValidate(formData, "categories", obj);
                                        setFormData(newFormData);
                                    }}
                                    styles={selectStyles}
                                    isMulti
                                    getOptionLabel={(obj: any) => obj.name}
                                    getOptionValue={(obj: any) => String(obj.id)}
                                    onTurnDirty={handleTurnDirty}
                                    className="devc-form-input devc-form-select"
                                />
                                <p className="devc-form-error">{formData.categories.message}</p>
                            </div>
                            <div className="devc-mb-20">
                                <FormTextArea
                                    {...formData.description}
                                    className="devc-form-input devc-textarea"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleOnChangeInput}
                                />
                                <p className="devc-form-error">{formData.description.message}</p>
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