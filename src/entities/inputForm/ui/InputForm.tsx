

// Импорты
import { Product } from '@/widgets/InputOutput/types'
import styles from './InputForm.module.scss'
import { AddProductToDataBase } from '../actions/addProductToDataBase'

export default async function Inputform() {
    // отправка данных
    const url = 'https://6519336a818c4e98ac60224d.mockapi.io/products'
    const response = await fetch(url, {
        cache: "no-cache",
        next: {
            tags: ["products"]
        },
    })
    const products: Product[] = await response.json()

    return (
        <form action={AddProductToDataBase}>
            {/* Инпуты */}
            <div className="mb-6">
                <label className={styles.label}>Название единицы</label>
                <input name='product' id="email" className={styles.input} required />
            </div>
            <div className="mb-6">
                <label className={styles.label}>Описание</label>
                <input name='price' id="password" className={styles.input} required />
            </div>

            {/* Кнопка отправки */}
            <button type="submit" className={styles.button}>Отправить</button>
        </form>
    )
}