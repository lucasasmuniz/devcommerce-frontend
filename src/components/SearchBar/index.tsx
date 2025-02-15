import "./styles.css"

export default function SearchBar() {
    return (
        <form className="devc-search-bar devc-mb-20">
            <button type="submit">🔎︎</button>
            <input id="devc-search-product" type="text" placeholder="Nome do produto" />
            <button type="reset">🗙</button>
        </form>
    );
}