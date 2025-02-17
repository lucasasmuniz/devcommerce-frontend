import "./styles.css";

type Props = {
    text : String
}


export default function ButtonInverse({text}:Props){
    return(
        <div className="devc-btn devc-btn-white">{text}</div>
    );
}