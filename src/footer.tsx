// Footer.jsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#FA7474] text-white py-4">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex space-x-4 mb-2">
                    <a href="/sobre" className="hover:underline">Sobre</a>
                    <a href="/contato" className="hover:underline">Contato</a>
                    <a href="/privacidade" className="hover:underline">Política de Privacidade</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Cozinha Italiana. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
                                                                                                                                                                                                                                                                                                                              