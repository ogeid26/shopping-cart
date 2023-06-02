import { AddToCartIcon, CartIcon } from "./Icons";
import './Products.css'


export function Products ({products}) {
    return(
        < main className = 'products' >
            <ul>
                {products.slice(0,10).map(product => (
                    <li key={product.id}>
                        <img
                        src = {product.thumbnail}
                        alt = {product.title}
                        />
                        <div>
                        <button> <AddToCartIcon /></button>
                        </div>
                        <div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}