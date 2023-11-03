import React, { useContext } from 'react';
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import '../styles.css';
import { useNavigate } from "react-router-dom";  // Изменил импорт здесь

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();  // Изменил на useNavigate

    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink className="navbar-brand-link" to={SHOP_ROUTE}>
                        My Shop
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {user.isAuth ? (
                            <>
                                <Button variant="info" className="mx-2" onClick={() => navigate(ADMIN_ROUTE)}>
                                    Админ панель
                                </Button>
                                <Button variant="danger" className="mx-2" onClick={() => navigate(LOGIN_ROUTE)}>
                                    Выйти
                                </Button>
                            </>
                        ) : (
                            <Button variant="success" onClick={() => user.setIsAuth(true)}>
                                Авторизация
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;
