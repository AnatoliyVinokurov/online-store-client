import React, { useContext, useState } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Badge, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const NavBar = observer(() => {
    const { user, device } = useContext(Context);
    const navigate = useNavigate(); // Use useNavigate to get the navigation function
    const [cartVisible, setCartVisible] = useState(false); // Состояние видимости корзины


    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <NavLink className="navbar-brand-link" to={SHOP_ROUTE}>
                    My Shop
                </NavLink>
               
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)} // Use navigate to navigate to ADMIN_ROUTE
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={logOut} // Use logOut function directly
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                        <Button
                            variant="outline-light"
                            className="ml-2"
                            onClick={() => navigate(BASKET_ROUTE)}
                        >
                            Корзина
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)} // Use navigate to navigate to LOGIN_ROUTE
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
