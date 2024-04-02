import React from "react";
import Card from "react-bootstrap/Card";
 
 

const Infinix = () => {

    const Infinixinfo = [
        { id: 10, image: "/hot50.jpg", title: "Infinix Hot 50", text: "This infinix is a new phone. it is the only one left in stock. will be shipped freely. ", price: "$230.80" },
        { id: 11, image: "/hot40.jpg", title: "Infinix Hot 40", text: "128gb infinix 40. It is brand new with the latest features. there are 5 left in the stock.", price: "$165.95" },
        { id: 12, image: "/smart8.jpg", title: "Infinix Smart 8", text: "Infinix smart 8 is the sci-fi of the brand, with amazing features ", price: "$130.75" },
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
