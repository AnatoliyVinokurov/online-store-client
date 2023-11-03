import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import '../styles.css';

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3} className="type-bar">
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <div className="brand-bar">
                        <BrandBar />
                    </div>
                    <div className="device-list">
                        <DeviceList />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
