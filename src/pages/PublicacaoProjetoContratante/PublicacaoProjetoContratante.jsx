import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./PublicacaoProjetoContratante.css";

const PublicacaoProjetoContratante = () => {
  const navigate = useNavigate(); // Hook para navegação
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricaoProjeto, setDescricaoProjeto] = useState("");
  const [especificacao, setEspecificacao] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!nomeProjeto || !descricaoProjeto || !preco) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const token = localStorage.getItem("authToken"); // Recupera o token salvo no login
    if (!token) {
      alert("Erro: Token de autenticação não encontrado. Faça login novamente.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("https://markcollab-backend.onrender.com/api/projects/{employercpf}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
        body: JSON.stringify({
          titulo: nomeProjeto, // Altere para nomeProjeto
          descricao: descricaoProjeto, // Altere para descricaoProjeto
          orcamento: preco, // Altere para preco
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Espera-se obter JSON da resposta
        alert("Projeto criado com sucesso!");
        navigate("/home"); // Redireciona para a página inicial
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || "Ocorreu um erro na publicação do projeto."}`);
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert("Erro ao conectar ao servidor.");
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
