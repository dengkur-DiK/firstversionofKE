import React from "react";
import { Card } from "react-bootstrap";

const Airpods = () => {
    const Airpodsinfo = [
        { id: "78", image: "/applepro.jpg", title: "Apple Pro Headphones", text: "With the horse power energy the apple product brings you full experience of safe voice reduce and melodious music.There are huge cuts this week, so rush and grab your fancy headphones!", price: "$45.00" },
        { id: "76", image: "/jp.jpg", title: "Airpods Pro", text: "Pro airpods with high quality voice made in Japan, not China.", price: "$25.35" },
        { id: "71", image: "/appro.jpg", title: "Apple Pro Airpods", text: "Love apple products? buy this genuine pair of apple airpods that will give you full satisfaction in music", price: "$35.20" },
    ];

    const renderairpods = (card, index) => {
        return (
            <Card
                style={{ width: '18rem', cursor: 'pointer' }}
                key={index}
            >
                <Card.Img variant="top" src={card.image} alt={card.title} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <h6 className="price">{card.price}</h6>
                </Card.Body>
            </Card>
        );
    };

    return <div className='AP'>{Airpodsinfo.map(renderairpods)}</div>;
};

export default Airpods;
