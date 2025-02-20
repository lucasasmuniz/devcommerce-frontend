import "./styles.css";

type Props = {
    name : string
}

export default function ProductCategory({name} : Props) {
    return(
        <h2 className="devc-product-details-tags">{name}</h2>
    );
}