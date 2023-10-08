"use server"
import { Product } from "@/widgets/InputOutput/types";
import { revalidateTag } from "next/cache";

// добавление продукта в базу данных
export const AddProductToDataBase = async (event: FormData) => {
    // URL базы данных
    const url = 'https://6519336a818c4e98ac60224d.mockapi.io/products'
    // Продукт
    const product = event.get("product")?.toString();
    // Цена
    const price = event.get("price")?.toString();

    // Если пустое, то выйти из функции
    if (!product || !price) return;
    // Новый продукт
    const newProduct: Product = {
        product,
        price,
    };

    await fetch(url, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers:{
            "Content-Type": "application/json",
        }
    })

    revalidateTag("products")
}