import { useState } from 'react';
import logoifrj from './assets/logoifrj.png';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (!cpf || !senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    console.log('Dados enviados:', { cpf, senha });
    navigate('/dashboard', { state: { userCPF: cpf, userSenha: senha } });
  };

  return (
    <>
      <form className='login' onSubmit={handleLogin}>
        <div className="container">
          <img className="imagem" src={logoifrj} alt="Logo IFRJ" />
          <div className="info">
            <p>Agora o acesso é feito com o seu <strong>CPF</strong> + <strong>senha</strong>.</p>
          </div>
          <div className="meio">
            <input 
              type="number" 
              placeholder="CPF (só números)" 
              value={cpf} 
              name="cpf" 
              onChange={(e) => setCpf(e.target.value)} 
            />

            <input 
              type="password" 
              placeholder="Senha" 
              name="senha" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit">Confirmar</button>
          </div>
          <div className="outros">
            <a href="#">Esqueci minha Senha</a>
            <a href="#">Esqueci o E-mail Cadastrado</a>
            <a href="#">Sou responsável - primeiro acesso</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;