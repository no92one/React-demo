import type Product from "../interfaces/Product.ts";

export default function ProductCard({ product }: { product: Product }) {
    const { name, description, price }: Product = product
    console.log("product - ", product);
    return <>
        <h1>{name} - {price}</h1>
        <p>Beskrivning: {description} </p>
    </>
}
