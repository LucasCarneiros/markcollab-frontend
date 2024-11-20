.publicacao-container {
    padding: 20px;
  }
  
  .publicacao-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .publicacao-title {
    font-size: 2.5rem;
    color: #2C65F6;
  }
  
  .publicacao-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .publicacao-field {
    display: flex;
    flex-direction: column;
  }
  
  .publicacao-field label {
    margin-bottom: 5px;
    
  }
  
  .publicacao-field input,
  .publicacao-field select,
  .publicacao-field textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 1rem;
  }
  
  .publicacao-radio-group {
    display: flex;
    gap: 10px;
  }
  
  .publicacao-radio-group label {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .publicacao-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.25rem;
  }
  
  .publicacao-button:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 768px) {
    .publicacao-title {
      font-size: 2rem;
    }
  
    .publicacao-form {
      padding: 10px;
    }
  }
  