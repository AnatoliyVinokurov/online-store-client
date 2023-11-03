import React from 'react';
import { Button, Container } from "react-bootstrap";
import '../styles.css'; // Импортируем стили из файла styles.css

const Admin = () => {
    return (
        <Container className="d-flex flex-column align-items-center admin-container">
        <Button variant={"outline-dark"} className="mt-4 p-2 admin-button">Добавить тип</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2 admin-button">Добавить бренд</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2 admin-button">Добавить устройство</Button>
        </Container>
    );
};

export default Admin;
