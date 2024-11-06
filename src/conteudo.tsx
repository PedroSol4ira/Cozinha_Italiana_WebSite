import React from 'react';
import restaurante1 from './assets/restaurante1.jpg';

const imageRestaurant = [restaurante1];

const Conteudo: React.FC = () => {
  return (
    <div className="relative w-full h-full p-4">
      <div className="w-full lg:w-1/2 mx-auto rounded-xl p-4 lg:p-8" style={{ background: "#FA7474" }}>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
          {imageRestaurant.map((image, index) => (
            <div key={index} className="flex-shrink-0 overflow-hidden rounded-full h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
              <img
                src={image}
                alt={`Prato ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          <div className="flex-1 text-white text-center lg:text-left">
            <h1 className="text-base md:text-lg leading-relaxed">
              No coração da cidade, o restaurante Cozinha Italiana nasceu do sonho de trazer a autêntica experiência gastronômica italiana para perto de todos. Fundado por uma família italiana que chegou ao Brasil na década de 1960, o Cozinha Italiana combina receitas tradicionais passadas por gerações com ingredientes frescos e de alta qualidade. O ambiente acolhedor e charmoso, inspirado nas vilas da Toscana, faz com que cada cliente se sinta parte da família.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Conteudo;
