import React, {useState} from 'react';
import { Button, Container } from "react-bootstrap";
import '../styles.css';
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType"; // Импортируем стили из файла styles.css

const Admin = () => {
    const[brandVisible, setBrandVisible] = useState(false)
    const[typeVisible, setTypeVisible] = useState(false)
    const[deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column align-items-center admin-container">
        <Button variant={"outline-dark"} className="mt-4 p-2 admin-button" onClick={()=>setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2 admin-button" onClick={()=>setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2 admin-button" onClick={()=>setDeviceVisible(true)}>Добавить устройство</Button>
        <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
