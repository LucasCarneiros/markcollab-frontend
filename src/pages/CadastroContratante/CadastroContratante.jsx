import React, { useState } from 'react';
import './CadastroContratante.css';
import { Link, useNavigate } from 'react-router-dom';

const CadastroContratante = () => {
  const navigate = useNavigate(); // Hook para navegação
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cnpjErro, setCnpjErro] = useState('');
  const [senhaErro, setSenhaErro] = useState('');
  const [emailErro, setEmailErro] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [telefoneErro, setTelefoneErro] = useState('');


  const validarTelefone = (telefone) => {
    const regex = /^\d{11}$/; // Exemplo: 81996057991
    return regex.test(telefone);
  };
  
  const LIMITE_EMAIL = 100; // Definindo o limite máximo de caracteres para o campo de email

  // Função para validar CPF
  const validarCnpj = (cpf) => {
    const cpfLimpo = cpf.replace(/[^\d]/g, '');

    if (cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) {
      return false;
    }

    const calcularDigito1 = (cpf) => {
      let soma = 0;
      for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
      }
      let digito = (soma * 10) % 11;
      return digito === 10 || digito === 11 ? 0 : digito;
    };

    const calcularDigito2 = (cpf) => {
      let soma = 0;
      for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
      }
      let digito = (soma * 10) % 11;
      return digito === 10 || digito === 11 ? 0 : digito;
    };

    const digito1 = calcularDigito1(cpfLimpo);
    const digito2 = calcularDigito2(cpfLimpo);

    return cpfLimpo.charAt(9) == digito1 && cpfLimpo.charAt(10) == digito2;
  };

  // Função de handle para cadastro
  const handleCadastro = (event) => {
    event.preventDefault();

    // Validação de CPF
    if (!validarCnpj(cnpj)) {
      setCnpjErro('CNPJ inválido');
      return;
    }
    setCnpjErro('');

    // Validação de senha
    if (senha.length < 6) {
      setSenhaErro('Senha deve conter pelo menos 6 caracteres');
      return;
    }
    setSenhaErro('');

    // Validação de email (limite de caracteres)
    if (email.length > LIMITE_EMAIL) {
      setEmailErro('Máximo de caracteres excedido');
      return;
    }
    setEmailErro('');
    if (senha.length < 6) {
      setSenhaErro('Senha deve conter pelo menos 6 caracteres');
      return;
    }
    if (senha.length > 40) { // Valida se excedeu os 40 caracteres
      setSenhaErro('A senha deve conter no máximo 40 caracteres');
      return;
    }
    setSenhaErro('');
    const validarNome = (nome) => {
      const regex = /[<>{}[\]]/; // Adicione aqui os caracteres que deseja bloquear
      return regex.test(nome); // Retorna true se houver caracteres inválidos
    };
    
      // Verificar se há caracteres inválidos no campo "Nome Completo"
      if (validarNome(nome)) {
        setErroNome('O nome não pode conter caracteres inválidos como <, >, {, }.');
        return;
      }
      setErroNome('');

       // Validação de telefone
  if (!validarTelefone(telefone)) {
    setTelefoneErro('Número de telefone inválido. Exemplo: 81912345678');
    return;
  }
  setTelefoneErro('');

    // Lógica de cadastro
    console.log('Nome:', nome);
    console.log('Email corporativo:', email);
    console.log('Telefone:', telefone);
    console.log('Senha:', senha);
    console.log('CNPJ:', cnpj);

    // Após o cadastro, redirecionar para a tela de HomeFreelancer
    navigate('/HomeContratante');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-left">
        {/* Espaço reservado para conteúdo ou branding */}
        <Link to="/" className="login-arrow" style={{ cursor: 'pointer' }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 59 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.918 43.0015L34.2157 23.7779L54.918 4.55435"
              stroke="white"
              strokeWidth="5.51686"
              strokeLinecap="square"
            />
            <path
              d="M25.3359 43.0015L4.63364 23.7779L25.3359 4.55435"
              stroke="white"
              strokeWidth="5.51686"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </div>
      <div className="cadastro-right">
        <form className="cadastro-form" onSubmit={handleCadastro}>
          <h1 className="cadastro-title">Cadastre-se</h1>
          <div className="cadastro-field">
            <label htmlFor="nome">Nome da empresa:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            {erroNome && <span className="erro">{erroNome}</span>}
          </div>
          <div className="cadastro-field">
            <label htmlFor="email">Email corporativo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={LIMITE_EMAIL} // Limite de caracteres para o e-mail
            />
            {emailErro && <span className="erro">{emailErro}</span>}
          </div>
          <div className="cadastro-field">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
            {telefoneErro && <span className="erro">{telefoneErro}</span>}
          </div>
          <div className="cadastro-field">
            <label htmlFor="cnpj">CNPJ:</label>
            <input
              type="text"
              id="cnpj"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              required
              placeholder="Digite o CNPJ"
            />
            {cnpjErro && <span className="erro">{cnpjErro}</span>}
          </div>
          <div className="cadastro-field">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            {senhaErro && <span className="erro">{senhaErro}</span>}
          </div>
          <button className="cadastro-button" type="submit">
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroContratante;
