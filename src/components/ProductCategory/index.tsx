import "./styles.css";

type Props = {
    name : String
}

export default function ProductCategory({name} : Props) {
    return(
        <h2 className="devc-product-details-tags">{name}</h2>
    );
}