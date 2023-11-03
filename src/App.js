import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { createContext } from 'react';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
