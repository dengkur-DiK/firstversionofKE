import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Card from 'react-bootstrap/Card';
const Containers = () => {
    const Containerinfo = [
        { id: 1, image: "./src/assets/iphones.jpg", title: "iPhones", text: "We have the best collection of iphones:originial iphones , with vibrant colors and good functionality check out our resources"},
        { id: 2, image: "./src/assets/infinix.jpg", title: "Infinix", text: "Our Infinix phones stand at the top of their name in Africa, they function nicely and they have flying colors. Invest in those and have a lifestyle" },
        { id: 3, image: "./src/assets/tekno.jpg", title: "Tekno", text: "Click to explore our explicit and exquisite collection of Tecno phones. The best African brand in it's is here at Kurino" },
        { id: 4, image: "./src/assets/airpods.jpg", title: "Airpods", text: "The pro airpods at best prices, quality voice, safe bass, vibrant colors it's Your choice:blue red white pink among others" },
        { id: 4, image: "/oppoa78.jpg", title: "Oppo", text: "These oppo products are the best in the market with quality cameras and other amazing features" },
    ];




    const renderCard = (card, index) => {
        return (
            <Card
                style={{ width: '18rem', cursor: 'pointer' }}
                key={index}
            >
                <Link to={`/pages/${card.title}`}>
                    <Card.Img variant="top" src={card.image} alt={card.title} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        );
    };

    return <div className='Apps'>{Containerinfo.map(renderCard)}</div>;
};

export default Containers;
