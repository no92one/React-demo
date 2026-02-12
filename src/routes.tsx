// Page-komponenter
import People from "./pages/People.tsx"
import Products from "./pages/Products.tsx"


//Loaders

const routes = [
    {
        path: "/",
        element: <People />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "*",
        element: <h1>Sorry! This page does not exist!</h1>
    },
]


export default routes 