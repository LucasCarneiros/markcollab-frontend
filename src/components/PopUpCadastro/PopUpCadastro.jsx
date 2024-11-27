import React from "react";
import "./PopUpCadastro.css"; // CSS atualizado

const PopUpCadastro = ({ isOpen, onFreelancer, onContratante, onClose }) => {
  // Se o pop-up não estiver aberto, ele não será renderizado
  if (!isOpen) return null;

  // Fechar o pop-up ao clicar fora do conteúdo
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOutsideClick}>
      <div className="popup-content">
        {/* Barra azul no topo */}
        <div className="popup-header">
          <span>Responda para continuar</span>
        </div>
        {/* Corpo do pop-up */}
        <div className="popup-body">
          <h2>VOCÊ É FREELANCER OU CONTRATANTE?</h2>
          <div className="popup-buttons">
            <button className="popup-button freelancer" onClick={onFreelancer}>
              Freelancer
            </button>
            <button className="popup-button contratante" onClick={onContratante}>
              Contratante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCadastro;
