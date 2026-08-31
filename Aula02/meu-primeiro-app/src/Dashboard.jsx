import { useNavigate, useLocation } from "react-router-dom";
import './App.css';
import './Dashboard.css';
import { useEffect } from "react";
import Header from './Header.jsx';

function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const usuarioCpf = location.state?.userCPF;
    const usuarioSenha = location.state?.userSenha;

    useEffect(() => {
        if (!usuarioSenha) {
            navigate('/');
        }
    }, [usuarioSenha, navigate]);

    return (
        <>
            <div className="container">
                <Header/>
                <div>
                    <h1>Painel Principal (Dashboard)</h1>
                    <h2>Seja Bem-Vindo {usuarioCpf}, sua senha: {usuarioSenha}</h2>
                </div>
                <footer>mcoliveira@gmail.com</footer>
            </div>
        </>
    );
}

export default Dashboard;