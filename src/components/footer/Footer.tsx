import React, { useState } from 'react';
import Image from "next/image";
import logo from "../../images/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Modal from 'react-modal';

// Estilos para o modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: '12px',
    border: 'none',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

// Define o elemento raiz para o modal
Modal.setAppElement('#__next');

export default function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  const privacyPolicy = `
  Respeitamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações quando você utiliza nossos serviços. 
  Coleta de Informações
  Coletamos informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail e telefone, bem como informações de navegação em nosso site.
  Uso das Informações
  Utilizamos suas informações para fornecer, manter e melhorar nossos serviços, bem como para comunicação e marketing.
  Proteção das Informações
  Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
  `;

  const termsOfService = `
  Ao utilizar nossos serviços, você concorda com os seguintes termos e condições.
  Uso do Serviço: Você deve usar nossos serviços de acordo com todas as leis aplicáveis e não deve utilizar nossos serviços para qualquer propósito ilegal ou não autorizado.
  Conta de Usuário: Você é responsável por manter a segurança da sua conta e senha. Não podemos e não seremos responsáveis por qualquer perda ou dano resultante do seu descumprimento desta obrigação de segurança.
  Alterações nos Termos: Reservamo-nos o direito de modificar estes termos a qualquer momento. Você deve revisar estes termos regularmente para garantir que está ciente de quaisquer alterações.
  `;

  const aboutUs = `
  Bem-vindo ao Bodega Club, sua principal fonte para as melhores bebidas e experiências de clube de assinatura.
  
  Na Bodega Club, estamos apaixonados por oferecer uma seleção exclusiva de bebidas premium, desde vinhos finos até destilados raros e cervejas artesanais. Nosso objetivo é proporcionar uma experiência única de compra, onde você pode descobrir novos sabores e produtos de alta qualidade.
  
  Além disso, oferecemos clubes de assinatura personalizados, onde você pode receber regularmente uma seleção cuidadosamente selecionada de bebidas diretamente em sua porta. Nossos clubes de assinatura são uma maneira emocionante de explorar uma variedade de bebidas e expandir seu paladar.
  
  No Bodega Club, estamos comprometidos em fornecer um serviço excepcional aos nossos clientes, garantindo que cada experiência de compra seja conveniente, segura e memorável. Junte-se a nós hoje e descubra o mundo emocionante das bebidas premium com o Bodega Club!
`;

  return (
    <div className='w-full bg-Azul text-white py-6'>
      <div className="w-full mx-auto flex flex-col items-center justify-between px-4 gap-4">
        <div className="flex flex-col items-center gap-3">
          <div className="px-2">
            <Image className="w-16 object-cover mt-1" src={logo} alt="logo.png" />
          </div>
          <div className="flex gap-4 text-2xl">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-gray-400 duration-300" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-gray-400 duration-300" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-400 duration-300" />
            </Link>
          </div>
        </div>

        <div className="text-sm text-white flex flex-col items-center gap-3">
          <button onClick={() => openModal('Sobre Nós', aboutUs)} className="hover:underline">Sobre Nós</button>
          <button onClick={() => openModal('Contato', 'Email: bodega.club.tc@gmail.com\nTelefone: (99) 99999-9999\nInstagram: @bodega.club')} className="hover:underline">Contato</button>
          <button onClick={() => openModal('Política de Privacidade', privacyPolicy)} className="hover:underline">Política de Privacidade</button>
          <button onClick={() => openModal('Termos de Serviço', termsOfService)} className="hover:underline">Termos de Serviço</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={modalContent.title}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{modalContent.title}</h2>
          <button onClick={closeModal} className="text-white hover:text-gray-400 text-lg">✖</button>
        </div>
        <div className="mt-4 space-y-2">
          {modalContent.content.split('\n').map((line, index) => (
            <p key={index} className="text-base">{line}</p>
          ))}
        </div>
      </Modal>
    </div>
  );
}
