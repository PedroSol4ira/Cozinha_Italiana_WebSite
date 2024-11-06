import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Header from './header.tsx';
import ImageGallery from './images.tsx';
import Conteudo from './conteudo.tsx';
import Footer from './footer.tsx';
import Cardapio from './cardapio.tsx';
// import cardapio from './assets/cardapio.jpg'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col text-white" style={{ background: "#0000" }}>
      <Header />
      <main className="flex-grow"> 
        <ImageGallery />
        <Conteudo />
        <Cardapio />
      </main>
      <Footer />
    </div>
  </StrictMode>
);
