import { useContext } from "react";
import { Link } from "react-router";
import { GlobalContext } from "../GlobalContext";

export default function Header() {
    const { changeFilterText }: { changeFilterText: Function } = useContext(GlobalContext)
    
    return <header>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <label>
            Filter on:
            <input type="text" onChange={e => changeFilterText(e.target.value)} placeholder="Filter text" />
        </label>
    </header>
}
