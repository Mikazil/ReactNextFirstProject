import { ICardProduct } from "@/widgets/CardProduct/types";
import CardProduct from "@/widgets/CardProduct/ui/CardProduct";

export default async function ShopList() {
  let url = 'https://6519336a818c4e98ac60224d.mockapi.io/products'
  let response = await fetch(url, {
    cache: 'no-cache'
  })
  let products: ICardProduct[] = await response.json();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <CardProduct
            product={product.product}
            price={product.price}
            photo={product.photo} />
        </div>

      ))}
    </div>
    // <CardProduct product="python-is-trash" 
    // price="123098" 
    // photo="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Python/Emilia_Holding_Intro_to_Python.jpg?raw=true" />
  )
}
