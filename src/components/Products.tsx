import { CartIcon } from "./Icons";
import './Products.css'

interface Product {
    id: number;
    thumbnail: string;
    title: string;
  }

  interface ProductsProps {
    products: Product[];
  }

export function Products ({products}: ProductsProps) {
    return(
        < main className = 'products' >
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img
                        src = {product.thumbnail}
                        alt = {product.title}
                        />
                        <div>
                        <strong>{product.title}</strong>
                        </div>
                        <div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}