import React from 'react';
import { Col, Card, Image } from "react-bootstrap";
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from "../utils/consts";
import '../styles.css';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className="mt-3 device-item" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card className="device-card" border="light">
                <Image className="device-image" src={device.img} alt={device.name} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="device-brand">{device.name}</div>
                    <div className="d-flex align-items-center device-rating">
                        <div>{device.rating}</div>
                        <Image className="star-icon" src={star} alt="Star" />
                    </div>
                </div>
                <div className="device-name">{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
