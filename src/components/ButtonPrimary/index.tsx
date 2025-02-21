import "./styles.css";

type Props = {
    text : string,
}

export default function ButtonPrimary({text}:Props){

    return(
        <div className="devc-btn devc-btn-blue">{text}</div>
    );
}