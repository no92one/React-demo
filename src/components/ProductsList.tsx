import { useContext } from "react"
import type Product from "../interfaces/Product.ts"
import ProductCard from "./ProductCard.tsx"
import { GlobalContext } from "../GlobalContext.tsx"

type ProductsListProps = {
    productsData: Product[]
}

export default function ProductsList(props: ProductsListProps) {
    const { productsData } = props
    const { filterText }: { filterText: string } = useContext(GlobalContext)
    console.log("People data - ", productsData)

    return <>
        {productsData
            .filter(product => product.name.toLowerCase().includes(filterText.toLowerCase()) || filterText.trim() == "")
            .map(product => <ProductCard product={product} />)}
    </>
}
