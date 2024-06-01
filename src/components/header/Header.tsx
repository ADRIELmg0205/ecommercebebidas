import React, { useState } from 'react';
import Image from "next/image";
import logo from "../../images/logo.png";
import Carrinho from "../../images/Carrinho.png";
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HeaderProps {
  searchTerm?: string;
  setSearchTerm?: (term: string) => void;
  resetFilters?: () => void;
}

export default function Header({ searchTerm, setSearchTerm, resetFilters }: HeaderProps) {
  const router = useRouter();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm ?? '');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?search=${localSearchTerm}`);
  };

  const handleLogoClick = () => {
    if (resetFilters) {
      resetFilters();
    }
    router.push('/');
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

        <form onSubmit={handleSearchSubmit} className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input 
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none"
            type="text"
            placeholder="Pesquisar Produtos"
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
          />
          <button type="submit" className="w-12 h-full text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md bg-Cinza">
            <HiOutlineSearch />
          </button>
        </form>

        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[95%] text-TextoBranco xl-hidden xl:inline-flex gap-1">
          <SlLocationPin className="text-white" />
          <div>
            <p className="text-white"> Local Entrega </p>
          </div>
        </div>

        <div className="text-sm text-white flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[95%]">
          <p className="text-white font-bold"> Favoritos </p>
        </div>

        <div className="text-sm text-white-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[95%]">
          <p className="text-white font-bold items-center"> Conta </p>
        </div>
   
        <button className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[95%] relative">
          <Link href="/carrinho/cart">
            <div>
              <Image className="w-auto object-cover h-8" src={Carrinho} alt="Carrinho" />
            </div>
          </Link>
        </button>

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
