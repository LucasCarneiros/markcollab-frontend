import React from 'react';
import './PopUpAceitarProposta.css'; // Importando o CSS

const PopUpAceitarProposta = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          Proposta aceita!
        </div>
        <div className="popup-body">
          <h2>PROPOSTA ACEITA!</h2>
          <div className="popup-buttons">
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpAceitarProposta;
