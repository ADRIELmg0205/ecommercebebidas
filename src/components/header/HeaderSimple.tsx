import React, { useState } from 'react';
import Image from "next/image";
import logo from "../../images/logo.png";
import { HiOutlineSearch } from 'react-icons/hi';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


export default function HeaderSimple() {
  const [localSearchTerm, setLocalSearchTerm] = useState('');



  const handleLogoClick = () => {
    // Implemente a lógica necessária quando o logotipo é clicado
  };

  return (
    <div className='w-full h-20 bg-Azul text-TextoBranco sticky top-0 z-50'>
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <div 
          onClick={handleLogoClick} 
          className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[95%]"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logo.png" />
        </div>
        <div className='flex items-center gap-8'>
          <SignedIn>
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full"></div>
              <UserButton showName={true} />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
              <button className='text-sm text-white flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[95%] rounded-md border-gray-400 px-3 py-2'>
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
