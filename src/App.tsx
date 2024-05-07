import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Home from './pages/home/Home';
/* import Navbar from './components/navbar/Navbar'; */
import Navbar2 from './components/Navbar2';
import Productos from './pages/products/Productos';
import ErrorPage from './components/errorpage/ErrorPage';

function App() {

  const location = useLocation();
  const isErrorPage = location.pathname === '/error';

  return (<div>
    {/* <Navbar /> */}
    {/* <Navbar2 /> */}
    {!isErrorPage && <Navbar2 />}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Productos" element={<Productos />} />
        {/* Ruta para la página de error */}
        <Route path="/error" element={<ErrorPage />} />
        {/* Ruta predeterminada para manejar enlaces no registrados */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
  </div>
  );
}
export default App;
