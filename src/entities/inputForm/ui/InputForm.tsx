import styles from './InputForm.module.scss'

export default function Inputform() {
    return (

        <form>
            <div className="mb-6">
                <label  className={styles.label}>Название единицы</label>
                <input id="email" className={styles.input} required />
            </div>
            <div className="mb-6">
                <label  className={styles.label}>Описание</label>
                <input id="password" className={styles.input} required />
            </div>
            <button type="submit" className={styles.button}>Submit</button>
        </form>

    )
}