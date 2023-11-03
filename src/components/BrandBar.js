import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Card, Row } from "react-bootstrap";
import { Context } from "../index";
import '../styles.css';

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className="d-flex brand-bar">
            {device.brands.map(brand => (
                <Card
                    key={brand.id}
                    className={`brand-item p-3 ${brand.id === device.selectedBrand.id ? 'active' : ''}`}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});

export default BrandBar;
