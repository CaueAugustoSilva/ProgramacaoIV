import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import logoifrj from './assets/logoifrj.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <img class="imagem" src={logoifrj} alt="Logo IFRJ"/>
        <div class="info">
            <p>Agora o acesso é feito com o seu <strong>CPF</strong> + <strong>senha</strong>.</p>
        </div>
        <div class="meio">
            <input type="text" placeholder="CPF (só números)" name="cpf"/>
            <input type="password" placeholder="Senha" name="senha"/>
            <button type="submit">Confirmar</button>
        </div>
        <div class="outros">
            <a href="#">Esqueci minha Senha</a>
            <a href="#">Esqueci o E-mail Cadastrado</a>
            <a href="#">Sou responsável - primeiro acesso</a>
        </div>

    </div>
    </>
  )
}

export default App
