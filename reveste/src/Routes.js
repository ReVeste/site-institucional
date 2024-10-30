import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CadastroForm from './pages/Cadastro/Cadastro';
import TermosDeServico from './pages/Termos/TermosDeServico';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<CadastroForm />} />
                <Route path="/cadastro/termos-de-servico" element={<TermosDeServico />} />
                <Route path="/termos-de-servico" element={<TermosDeServico />} />

            </Routes>
        </Router>
    );
}

export default Rotas;