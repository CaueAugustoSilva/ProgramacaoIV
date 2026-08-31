import {useNavigate, useLocation} from "react-router-dom";
import { useEffect } from "react";


function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const usuarioCpf = location.state?.userCPF;
    const usuarioSenha = location.state?.userSenha;

    const handleLogout = () => {
        navigate('/');
    };

    useEffect(() => {
        if (!usuarioSenha) {
            navigate('/');
        }
    }, [usuarioSenha, navigate]);

    return (
        <>
            <header>
                <img src="#" alt="Logo"/>
                <img src="#" alt="Usuário"/>
                <h2>Usuario: {usuarioCpf}</h2>
                    <nav>
                        <ul>
                            <li>Configurações</li>
                            <li>
                                <button onClick={handleLogout}>Sair / Voltar ao Login</button>
                            </li>
                        </ul>
                    </nav>
            </header>
        </>
    )
} 

export default Header;