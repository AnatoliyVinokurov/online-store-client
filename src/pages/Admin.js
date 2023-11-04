import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';
import '../styles.css'; // Импортируем файл стилей

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="admin-container">
      <div className="admin-header">
        <h2>Панель администратора</h2>
      </div>
      <div className="admin-buttons">
        <Button
          variant="success"
          className="admin-button"
          onClick={() => setTypeVisible(true)}
        >
          Добавить тип
        </Button>
        <Button
          variant="info"
          className="admin-button"
          onClick={() => setBrandVisible(true)}
        >
          Добавить бренд
        </Button>
        <Button
          variant="warning"
          className="admin-button"
          onClick={() => setDeviceVisible(true)}
        >
          Добавить устройство
        </Button>
      </div>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
