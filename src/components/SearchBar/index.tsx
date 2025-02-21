/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useState } from "react";
import "./styles.css"

type Props = {
    onSearch : Function;
}

export default function SearchBar({onSearch} : Props) {

    const [text, setText] = useState("");

    function handleSubmit(event : any){
        event.preventDefault();
        onSearch(text);
    }

    function handleInputChange(event: any){
        setText(event.target.value);
    }

    function handleInputReset(){
        setText("");
        onSearch(text);
    }

    return (
        <form className="devc-search-bar devc-mb-20">
            <button onClick={handleSubmit} type="submit">🔎︎</button>
            <input onChange={handleInputChange} value={text} id="devc-search-product" type="text" placeholder="Nome do produto" />
            <button className="btn-input-reset" onClick={handleInputReset} >🗙</button>
        </form>
    );
}