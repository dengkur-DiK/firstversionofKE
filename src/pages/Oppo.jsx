import React from "react";
import { Card } from "react-bootstrap";

const Oppo = () => {
    const Oppoinfo = [
        { id: "kj", image: "/opa78.jpg", title: "Oppo A78", text: "The latest oppo phone with the coolest posible features on any phone!", price: "$250.00" },
        { id: "kk", image: "/opa3s.jpg", title: "Oppo A3s", text: "Oppo A3s was shipped from Japan and it will provide the best functionalities", price: "$130.90" },
    ];

    const renderOppo = (card, index) => {
        return (
            <Card
                style={{ width: '18rem', cursor: 'pointer' }}
                key={index}
                
            >
                <Card.Img variant="top" src={card.image} alt={card.title} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <h6 className="kl;">{card.price}</h6>
                </Card.Body>
            </Card>
        );
    };

    return <div className='jk'>{Oppoinfo.map(renderOppo)}</div>;
};

export default Oppo;
