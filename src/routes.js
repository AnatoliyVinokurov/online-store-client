import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Comment: Admin
    },
    {
        path: BASKET_ROUTE,
        Comment: Basket
    }
]

export const publicRouts = [
    {
        path: SHOP_ROUTE,
        Comment: Shop
    },
    {
        path: LOGIN_ROUTE,
        Comment: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Comment: Auth
    },
    {
        path: DEVICE_ROUTE +'/:id',
        Comment: DevicePage
    }
]