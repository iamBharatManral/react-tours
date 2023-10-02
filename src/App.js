import './App.css';
import {useState} from "react";
import Cards from "./components/Cards/Cards";

const initialCards = [
    {title: 'Best Of Paris in 7 Days Tour', price: '1,995', src: 'https://www.course-api.com/images/tours/tour-1.jpeg', description: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You\'ll also enjoy guided neighborhood walks through the city\'s historic heart as well as quieter moments to slow down and savor the city\'s intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!'},
    {title: 'Best of Ireland in 14 Days Tour', price: '3,895', src: 'https://www.course-api.com/images/tours/tour-2.jpeg', description: 'Rick Steves\' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland\'s must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, Cliffs of Moher, Aran Islands, Galway, Connemara, Giant\'s Causeway, Old Bushmills Distillery, and the compelling city of Belfast. All along the way, Rick\'s guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!'},
    {title: 'Best of South Africa in 14 Days Tour', price: '3,895', src: 'https://www.course-api.com/images/tours/tour-3.jpeg', description: 'From the Cape of Good Hope to the Cape of Storms, we\'ll tour the gloriously scenic and culturally unique southwestern coast of South Africa. Along the way, we\'ll experience the charms of Cape Town, wander through Knysna\'s fabled forest, and cruise to several national parks — including Addo Elephant National Park, where we\'ll take a safari drive in search of the "Big Five." Join us for the Best of South Africa in 14 Days!'},
    {title: 'Best of Salzburg & Vienna in 8 Days Tour', price: '2,095', src: 'https://www.course-api.com/images/tours/tour-4.jpeg', description: 'Let\'s go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria\'s Golden Age. Your Rick Steves guide will bring this region\'s rich history and culture to life in festive Munich, fairy-tale Neuschwanstein, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!'},
    {title: 'Best of Turkey in 13 Days Tour', price: '2,595', src: 'https://www.course-api.com/images/tours/tour-5.jpeg', description: 'From the ancient ruins of Ephesus to the luxury beach resort of Bodrum, Turkey is a country that defies definition. With our 13-day tour of Turkey, you\'ll see the best of everything — whether it\'s touring around the former capital of Istanbul in a private boat or wandering through the lunar-like landscape of Cappadocia. Along the way, you\'ll marvel at the towering cliffs of Pamukkale, learn to make Turkish pottery in Avanos, and relax on the beaches of the Turquoise Coast. Join us for the Best of Turkey in 13 Days!'}
]
function App() {
    const [cards, setCards] = useState(initialCards)
    const refreshCards = () => {
        setCards(initialCards)
    }
    const removeCard = (title) => {
        setCards(cards.filter(c => c.title !== title))
    }
    const noCards = <div className={'noCards'}>
        <h1>No Cards Left</h1>
        <button type={'button'} onClick={refreshCards}>Refresh</button>
    </div>
    const cardsList = <div className={'cardsList'}>
        <h1>Our Tours</h1>
        <Cards cards={cards} removeCard={removeCard} />
    </div>
  return (
    <div className="App">
        {cards.length > 0 ? cardsList : noCards}
    </div>
  );
}

export default App;
