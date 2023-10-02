import React, {useState} from 'react';
import styles from './Card.module.css'
const Card = ({title, price, src, description, removeCard}) => {
    const [readMore, setReadMore] = useState(true)
    const toggleReadMore  = () => setReadMore(prev => !prev)

    const readMoreContent = <span className={styles.more} onClick={toggleReadMore}>{readMore ? 'Read More.' : 'Show Less.'}</span>
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={src} alt="location" className={styles.img}/>
                <span className={styles.price}>${price}</span>
            </div>
            <div className={styles.content}>
                <h2>{title}</h2>
                <div className={`${styles.desc} ${readMore ? 'less' : ''}`}>{description}</div>{readMoreContent}
                <button type={'button'} onClick={() => removeCard(title)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Card;
