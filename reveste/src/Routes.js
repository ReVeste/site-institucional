import { BrowserRouter as Router, Routes, Route, Switch  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';

function Rotas() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/forms" element={<Cadastro/>}/>
                </Routes>
            </Router>
        </>
    )
};
export default Rotas;