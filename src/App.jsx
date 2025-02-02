import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '53%' }); // Inicializar en el centro de la pantalla
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Estado para deshabilitar el botón "SI"

  const handleYesClick = () => {
    if (isButtonDisabled) return; // Si el botón está deshabilitado, no hacer nada

    // Generar una posición aleatoria para el botón "SI", asegurándonos que no se salga de la pantalla
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 150));

    // Ajustar para evitar que el botón se salga de la pantalla
    const safeTop = Math.min(randomTop, window.innerHeight - 50);
    const safeLeft = Math.min(randomLeft, window.innerWidth - 150);

    setButtonPosition({ top: safeTop, left: safeLeft });
  };

  const handleNoClick = () => {
    setResponse("Yo sabía que no eras pajero, te quiero ❤️");
    setIsButtonDisabled(true); // Deshabilitar el botón "SI" cuando se hace clic en "NO"
    setButtonPosition({ top: '35%', left: '50%' }); // Colocar el botón "SI" en la posición inicial cerca de "NO"
  };

  const handleResetGame = () => {
    setResponse(null); // Limpiar la respuesta
    setIsButtonDisabled(false); // Habilitar nuevamente el botón "SI"
    setButtonPosition({ top: '35%', left: '50%' }); // Restablecer la posición del botón "SI" al centro
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 relative">
      <h1 className="absolute top-1/8 text-3xl font-semibold text-center px-8">¿Querés que te envíe una nude?🫦</h1>

      {/* Contenedor de botones, alineado horizontalmente */}
      <div className="buttons flex flex-row space-y-4">
        {/* Botón SI */}
        <button
          className={`${isButtonDisabled ? 'bg-gray-500' : 'bg-rose-400'} absolute px-6 py-2 text-white rounded-lg transition duration-200`}
          style={{ top: buttonPosition.top, left: buttonPosition.left, transform: 'translate(-50%, -50%)' }}
          onClick={handleYesClick}
          disabled={isButtonDisabled}
        >
          SI, POR FAVOR 🙏
        </button>

        {/* Botón NO */}
        <button
          className="absolute px-6 py-2 bg-sky-700 text-white rounded-lg  transition duration-200"
          style={{ transform: 'translate(-50%, 0%)' }}
          onClick={handleNoClick}
        >
          NO, YO TE RESPETO 😌
        </button>
      </div>

      {/* Mostrar la respuesta cuando se hace clic en NO */}
      {response && (
        <div className="absolute max-w-screen text-center top-3/4 transform-x-1/2">
          <p className="text-xl text-gray-700 text-center mb-8 px-8">{response}</p>

          {/* Botón de volver a jugar */}
          <button
            className="mt-4 px-6 py-2 bg-lime-950 text-white rounded-lg hover:bg-green-600 transition duration-200"
            onClick={handleResetGame}
          >
            Volver a Jugar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
