import React, { createContext, useState } from 'react';

// Criação do contexto
const FontSizeContext = createContext();

// Componente Provider
export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16); // Inicialize com o tamanho padrão da fonte

  const increaseFontSize = () => {
    setFontSize((currentSize) => currentSize + 1); // Incrementa o tamanho da fonte
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export default FontSizeContext;
