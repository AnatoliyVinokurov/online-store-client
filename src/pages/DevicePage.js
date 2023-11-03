import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/star.png';
import '../styles.css';

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'iphone 11 pro',
        price: 10,
        rating: 3,
        img:
            'https://img1.goodfon.com/original/4266x3072/e/e6/zhivotnoe-kot-bolshie-glaza.jpg',
    };

    const description = [
        { id: 1, title: 'Color', description: 'Silver' },
        { id: 2, title: 'Storage', description: '128GB' },
    ];

    return (
        <Container className="device-page">
            <Row>
                <Col md={4}>
                    <Image
                        className="device-image"
                        src={device.img}
                        alt={device.name}
                    />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 className="device-name">{device.name}</h2>
                        <div className="rating-container">
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="price-card">
                        <h3>Price: {device.price} USD</h3>
                        <Button variant="outline-dark">Add to Cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3 description-container">
                <h1>Specifications</h1>
                {description.map((info, index) => (
                    <Row
                        key={info.id}
                        className={`description-row ${
                            index % 2 === 0 ? 'even' : 'odd'
                        }`}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default DevicePage;
