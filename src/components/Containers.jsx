import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Card from 'react-bootstrap/Card';
const Containers = () => {
    const Containerinfo = [
        { id: 1, image: "./src/assets/iphones.jpg", title: "iPhones", text: "Best iPhones ever. Read more..."},
        { id: 2, image: "./src/assets/infinix.jpg", title: "Infinix", text: "The latest of all Infinix phones, fully functional." },
        { id: 3, image: "./src/assets/tekno.jpg", title: "Tekno", text: "The best Tekno phones exported from Nairobi, Kenya." },
        { id: 4, image: "./src/assets/airpods.jpg", title: "Airpods", text: "Get the latest Airpods with 5000mAh!" },
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
