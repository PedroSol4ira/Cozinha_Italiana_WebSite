import React from "react";
import pizza from './assets/pizza.jpg';
import spaguett from './assets/spaguett.jpg';
import image3 from './assets/image3.jpg';

const images = [
    pizza, 
    spaguett, 
    image3
];

const texts = [
    "Deliciosa Pizza",
    "Saboroso Spaguett",
    "Conchiglione "
];

const ImageGallery: React.FC = () => {
    return (
        <section className="py-8">
            <h1 className="flex justify-center text-black font-playfair-semibold text-2xl"><strong>Especialidades da Casa</strong></h1>
            <br />
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg group h-48 relative">
                        <img
                            src={image}
                            alt={`Prato ${index + 1}`}
                            className="w-full h-full object-cover filter brightness-100 group-hover:brightness-50 transition duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                            {texts[index]}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageGallery;
