import { Card } from "@/entities/card"
import { Inputform } from "@/entities/inputForm"
import { Product } from "../types"

export default async function InputOutput() {
    let url = 'https://6519336a818c4e98ac60224d.mockapi.io/products'
    let response = await fetch(url, {
        cache: 'no-cache'
    })
    let products: Product[] = await response.json();
    return (
        <div>
            <Inputform />
            <div className="font-bold p-5 gap-5">
                {products.map((product) => (
                    <div key={product.id} className="p-5 shadow">
                        <Card product={product.product} price={product.price} />
                    </div>
                ))}
            </div>

        </div>
    )
}
