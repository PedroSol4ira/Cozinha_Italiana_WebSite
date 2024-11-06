import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Input } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    numeroPessoas: '',
    dataHora: '',
  });

  const handleReserveClick = () => {
    setShowCard(!showCard);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formIsValid = true;

    if (!formData.nome) {
      toast.error('Por favor, preencha o nome da reserva.');
      formIsValid = false;
    }
    if (!formData.numeroPessoas) {
      toast.error('Por favor, informe o número de pessoas.');
      formIsValid = false;
    }
    if (!formData.dataHora) {
      toast.error('Por favor, selecione a data e a hora.');
      formIsValid = false;
    }

    if (formIsValid) {
      toast.success(() => (
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faPizzaSlice} />
          <span>Reserva realizada com sucesso!</span>
        </div>
      ));
      setShowCard(false);
      setFormData({ nome: '', numeroPessoas: '', dataHora: '' });
    }
  };

  return (
    <header className="bg-red-800 text-white p-8" style={{ background: "#369855" }}>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="font-playfair text-center text-3xl mb-4">Cozinha Italiana</h1>
      <br />

      <div className="container mx-auto flex justify-center items-center">
        <nav>
          <ul className="flex space-x-12 p-65">
            <li>
              <a href="#home" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">Ver Cardápio</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">Destaques do Menu</a>
            </li>
            <li>
              <button
                onClick={handleReserveClick}
                className="hover:text-gray-300 bg-gray-700 px-4 py-2 rounded"
              >
                Reservar uma mesa
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {showCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-gray-800">
            <h2 className="text-2xl mb-4">Reservar uma mesa</h2>
            <form onSubmit={handleFormSubmit}>
              <label className="block mb-2 relative">
                <span>Nome:</span>
                <div className='relative'>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder='Reserva no nome de:'
                  className="border border-gray-300 pl-10 p-2 w-full rounded"
                />
                <FontAwesomeIcon
                 icon={faUser} 
                 className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                 />
                </div>
              </label>


              <label className="block mb-2 relative">
                <span>Número de Pessoas:</span>
                <div className="relative">
                  <Input
                    color='blue'
                    type="number"
                    name="numeroPessoas"
                    placeholder="Ex: 4"
                    value={formData.numeroPessoas}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 pl-10 w-full rounded" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  />
                </div>
              </label>

              <label className="block mb-4">
                Data e Hora:
                <input
                  type="datetime-local"
                  name="dataHora"
                  value={formData.dataHora}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </label>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleReserveClick}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancelar
                </button>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                  Reservar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
