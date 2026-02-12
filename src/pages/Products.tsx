import ProductsList from "../components/ProductsList"

export default function Products() {

      const products = [
        {
          "name": "Hammare",
          "description": "Bra hammare",
          "price": 6000,
        },
        {
          "name": "Såg",
          "description": "Okej Såg",
          "price": 300,
        },
        {
          "name": "Spik 50-pack",
          "description": "Dåliga billiga spik",
          "price": 10,
        }
      ]
    
      return <>
        <ProductsList productsData={products} />
      </>
}
