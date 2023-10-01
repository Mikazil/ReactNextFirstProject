import { Post } from '../types'
import styles from "./Card.module.scss"

function Card(post: Post) {
    return (
        <>

            <a href="#" className={styles.a}>
                <h5 className={styles.h5}>{post.product}</h5>
                <p className={styles.p}>{post.price}</p>
            </a>

        </>
    )
}

export default Card