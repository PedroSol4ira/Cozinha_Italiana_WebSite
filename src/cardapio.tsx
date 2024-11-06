import React from "react";
import cardapio from './assets/cardapio.jpg';

const Cardapio: React.FC = () => {
    return (
        <div
            className="bg-cover bg-center rounded-xl "
            // style={{ backgroundImage: `url(${cardapio})`, height: '100vh', width: '100vh' }} // Ajuste a altura conforme necessário
        >
            <div>
                {/* Você pode adicionar mais conteúdo aqui */}
            </div>
            <div></div>
        </div>
    );
}

export default Cardapio;
