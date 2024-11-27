import React from 'react';
import './PopUpSairDaConta.css'; // Importar a folha de estilo para o PopUpSairDaConta

// Componente PopUpSairDaConta
const PopUpSairDaConta = ({ onClose, onConfirm }) => {
  return (
    <div className="popup-container" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Barra azul com ícone */}
        <div className="popup-header">
          <span className="popup-header-icon">🚪</span>
          <span className="popup-header-title">SAIR DA CONTA</span>
        </div>

        {/* Texto principal do pop-up */}
        <div className="popup-body">
          <p className="popup-message">TEM CERTEZA QUE DESEJA SAIR DA SUA CONTA?</p>
        </div>

        {/* Botões de "SAIR" e "CANCELAR" */}
        <div className="popup-footer">
          <button
            className="popup-button sair"
            onClick={() => {
              onConfirm();
              onClose(); // Fecha o pop-up após confirmar
            }}
          >
            SAIR
          </button>
          <button className="popup-button cancelar" onClick={onClose}>
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpSairDaConta;
