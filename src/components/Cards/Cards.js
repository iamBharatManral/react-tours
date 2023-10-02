import React from 'react';
import styles from './Cards.module.css'
import Card from "./Card/Card";
const Cards = ({cards, removeCard}) => {
    return (
        <div className={styles.cards}>
            {cards.map(c => <Card removeCard={removeCard} key={c.title} title={c.title} price={c.price} src={c.src} description={c.description}/>)}
        </div>
    )
}

export default Cards;
