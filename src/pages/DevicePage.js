import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import '../styles.css';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const [cart, setCart] = useState([]); // Состояние для корзины

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, [id]);

  const addToCart = () => {
    // Создаем копию текущей корзины и добавляем выбранный товар
    const updatedCart = [...cart, device];
    setCart(updatedCart);
  };

  return (
    <Container className="mt-3 device-container">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="device-name">{device.name}</h2>
            <div
              className="rating-container"
              style={{ backgroundImage: `url(${bigStar})` }}
            >
              <div className="rating">{device.rating}</div>
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="price-card">
            <h3 className="device-price">От: {device.price} руб.</h3>
            <Button variant="outline-dark" onClick={addToCart}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.info.map((info, index) => (
          <Row key={info.id} className={index % 2 === 0 ? 'info-row-light' : 'info-row-dark'}>
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
