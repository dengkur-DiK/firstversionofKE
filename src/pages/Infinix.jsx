import React from "react";
import Card from "react-bootstrap/Card";
 
 

const Infinix = () => {

    const Infinixinfo = [
        { id: 10, image: "/hot50.jpg", title: "Infinix Hot 50", text: "This is the latest version of Infinix selling at affordable prices at Kurino electronics", price: "$230.80" },
        { id: 11, image: "/hot40.jpg", title: "Infinix Hot 40", text: "128gb infinix 40. It is brand new with the latest features", price: "$165.95" },
        { id: 12, image: "/smart8.jpg", title: "Infinix Smart 8", text: "The best Tekno phones exported from Nairobi, Kenya.", price: "$130.75" },
    ];

    const renderinfinix = (card, index) => {
        return (
            <Card
                style={{ width: '18rem', cursor: 'pointer' }}
                key={index}
            >
                <Card.Img variant="top" src={card.image} alt={card.title} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <h6 className="IPrices">{card.price}</h6>
                </Card.Body>
            </Card>
        );
    };

    return <div className='Inks'>{Infinixinfo.map(renderinfinix)}</div>;
};

export default Infinix;
