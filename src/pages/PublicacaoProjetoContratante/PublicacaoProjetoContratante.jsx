import React, { useState } from 'react';
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import './PublicacaoProjetoContratante.css';

const PublicacaoProjetoContratante = () => {
const [categoria, setCategoria] = useState('');
const [nomeProjeto, setNomeProjeto] = useState('');
const [descricaoProjeto, setDescricaoProjeto] = useState('');
const [habilidades, setHabilidades] = useState('');
const [nivelExperiencia, setNivelExperiencia] = useState('');
const [diasPropostas, setDiasPropostas] = useState('');
const [prazoEntrega, setPrazoEntrega] = useState('');
const [arquivo, setArquivo] = useState(null);

const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({
    categoria,
    nomeProjeto,
    descricaoProjeto,
    habilidades,
    nivelExperiencia,
    diasPropostas,
    prazoEntrega,
    arquivo
    });
};

return (
    <div>
    <Navbar />
    <a href="/meusprojetoscontratante" className="meusprojetos-button">Ir para os meus projetos publicados</a>
    <div className="publicacao-container">
        <header className="publicacao-header">
        <h1 className="publicacao-title">Publicação de Projeto</h1>
        </header>
        <form className="publicacao-form" onSubmit={handleSubmit}>
        <div className="publicacao-field">
            <label htmlFor="categoria">Categoria do projeto:</label>
            <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            >
            <option value="">Selecione a categoria</option>
            <option value="desenvolvimento-web">Desenvolvimento Web</option>
            <option value="design-grafico">Design Gráfico</option>
            <option value="redacao">Redação</option>
            <option value="marketing-digital">Marketing Digital</option>
            </select>
        </div>
        <div className="publicacao-field">
            <label htmlFor="nomeProjeto">Nome do projeto:</label>
            <input
            type="text"
            id="nomeProjeto"
            value={nomeProjeto}
            onChange={(e) => setNomeProjeto(e.target.value)}
            />
        </div>
        <div className="publicacao-field">
            <label htmlFor="descricaoProjeto">Descrição do projeto:</label>
            <textarea
            id="descricaoProjeto"
            value={descricaoProjeto}
            onChange={(e) => setDescricaoProjeto(e.target.value)}
            ></textarea>
        </div>
        <div className="publicacao-field">
            <label htmlFor="habilidades">Quais habilidades você procura? (Opcional):</label>
            <select
            id="habilidades"
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
            >
            <option value="">Selecione as habilidades</option>
            <option value="html-css">HTML e CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="photoshop">Photoshop</option>
            </select>
        </div>
        <div className="publicacao-field">
            <label htmlFor="arquivo">Anexar arquivos (Opcional):</label>
            <input
            type="file"
            id="arquivo"
            onChange={(e) => setArquivo(e.target.files[0])}
            />
        </div>
        <div className="publicacao-field">
            <label>Nível de experiência desejado:</label>
            <div className="publicacao-radio-group">
            <label>
                <input
                type="radio"
                name="nivelExperiencia"
                value="iniciante"
                checked={nivelExperiencia === 'iniciante'}
                onChange={(e) => setNivelExperiencia(e.target.value)}
                />
                Iniciante
            </label>
            <label>
                <input
                type="radio"
                name="nivelExperiencia"
                value="intermediario"
                checked={nivelExperiencia === 'intermediario'}
                onChange={(e) => setNivelExperiencia(e.target.value)}
                />
                Intermediário
            </label>
            <label>
                <input
                type="radio"
                name="nivelExperiencia"
                value="especialista"
                checked={nivelExperiencia === 'especialista'}
                onChange={(e) => setNivelExperiencia(e.target.value)}
                />
                Especialista
            </label>
            </div>
        </div>
        <div className="publicacao-field">
            <label htmlFor="diasPropostas">Por quantos dias você deseja receber propostas para esse projeto?</label>
            <input
            type="number"
            id="diasPropostas"
            value={diasPropostas}
            onChange={(e) => setDiasPropostas(e.target.value)}
            />
        </div>
        <div className="publicacao-field">
            <label htmlFor="prazoEntrega">Prazo de entrega:</label>
            <input
            type="date"
            id="prazoEntrega"
            value={prazoEntrega}
            onChange={(e) => setPrazoEntrega(e.target.value)}
            />
        </div>
        <button className="publicacao-button" type="submit">Publicar</button>
        </form>
    </div>
    
    <Footer />
    </div>
);
};

export default PublicacaoProjetoContratante;
