import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PublicacaoProjetoContratante.css";
import Navbar from "../../components/navbar3/navbar3";
import Footer from "../../components/footer/Footer";

const PublicacaoProjetoContratante = () => {
  const navigate = useNavigate(); // Hook para navegação
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricaoProjeto, setDescricaoProjeto] = useState("");
  const [especificacao, setEspecificacao] = useState("");
  const [preco, setPreco] = useState("");
  const [employerCpf] = useState("98765432110"); // CPF mockado

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const payload = {
      projectTitle: nomeProjeto,
      projectDescription: descricaoProjeto,
      projectSpecifications: especificacao,
      projectPrice: parseFloat(preco), // Certifique-se de que o preço seja um número
    };
  
    // Supondo que o token esteja armazenado no localStorage
    const token = localStorage.getItem("jwtToken");
  
    if (!token) {
      alert("Você precisa estar logado para criar um projeto.");
      return;
    }
  
    try {
      const response = await fetch(
        `https://markcollab-backend.onrender.com/api/projects/${employerCpf}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Adicionando o token JWT no cabeçalho
          },
          body: JSON.stringify(payload),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        console.log("Projeto criado com sucesso:", data);
        alert(data.message || "Projeto publicado com sucesso!");
        navigate("/ProjetoPublicadoContratante");
      } else {
        const errorText = await response.text();
        console.error("Erro ao criar o projeto (Texto):", errorText);
        alert("Erro ao criar o projeto: " + errorText);
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro de conexão com o servidor.");
    }
  };
  
  return (
    <div>
      <Navbar />
      <a href="/meusprojetoscontratante" className="meusprojetos-button">
        Ir para os meus projetos publicados
      </a>
      <div className="publicacao-container">
        <header className="publicacao-header">
          <h1 className="publicacao-title">Publicação de Projeto</h1>
        </header>
        <form className="publicacao-form" onSubmit={handleSubmit}>
          <div className="publicacao-field">
            <label htmlFor="nomeProjeto">Nome do projeto:</label>
            <input
              type="text"
              id="nomeProjeto"
              value={nomeProjeto}
              onChange={(e) => setNomeProjeto(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="descricaoProjeto">Descrição do projeto:</label>
            <textarea
              id="descricaoProjeto"
              value={descricaoProjeto}
              onChange={(e) => setDescricaoProjeto(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="publicacao-field">
            <label htmlFor="especificacao">Especificações do projeto:</label>
            <input
              type="text"
              id="especificacao"
              value={especificacao}
              onChange={(e) => setEspecificacao(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="preco">Preço:</label>
            <input
              type="text"
              id="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="employerCpf">CPF do empregador:</label>
            <input
              type="text"
              id="employerCpf"
              value={employerCpf}
              disabled // Campo desabilitado pois o CPF está mockado
            />
          </div>
          <button className="publicacao-button" type="submit">
            Publicar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PublicacaoProjetoContratante;
