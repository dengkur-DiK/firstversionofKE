import React from "react";
import { Card } from "react-bootstrap";

const Tekno = () => {
    const Teknoinfo = [
        { id: "wm", image: "/pop6.jpg", title: "Tekno Pop 6", text: "Tecon Pop 6 is available for you at Kurino Electronics. Buy now and save on shipping charges!", price: "$90.00" },
        { id: "ad", image: "/spark20.jpg", title: "Tekno Spark 20", text: "Spark 20! One of the best Tecno products for you. Invest in a lifestyle by buying Spark 20", price: "$190.56" },
        { id: "cg", image: "/pop7.jpg", title: "Tekno Pop 7", text: "The latest Tekno Pop Seven with skyscraping features to make your life easier", price: "$150.79" },
    ];

    const renderTekno = (card, index) => {
        return (
            <Card
                style={{ width: '18rem', cursor: 'pointer' }}
                key={index}
            >
                <Card.Img variant="top" src={card.image} alt={card.title} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <h6 className="jikol">{card.price}</h6>
                </Card.Body>
            </Card>
        );
    };

    return <div className='TK'>{Teknoinfo.map(renderTekno)}</div>;
};

export default Tekno;
