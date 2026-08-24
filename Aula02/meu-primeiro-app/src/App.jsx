import { useState } from 'react'
import logoifrj from './assets/logoifrj.png'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    if (!cpf || !senha) {
      alert('Por favor, preencha todos os campos!')
      return
    }
    console.log('Dados enviados:', {cpf, senha})
    navigate('/dashboard')
  }

  return (
    <>
    <form className='login' onSubmit={handleLogin}>
      <div class="container">
        <img class="imagem" src={logoifrj} alt="Logo IFRJ"/>
        <div class="info">
            <p>Agora o acesso é feito com o seu <strong>CPF</strong> + <strong>senha</strong>.</p>
        </div>
        <div class="meio">
            <input 
            type="number" 
            placeholder="CPF (só números)" 
            value={cpf} name="cpf" 
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
        <div class="outros">
            <a href="#">Esqueci minha Senha</a>
            <a href="#">Esqueci o E-mail Cadastrado</a>
            <a href="#">Sou responsável - primeiro acesso</a>
        </div>

      </div>
    </form>
    </>
  )
}

export default App
