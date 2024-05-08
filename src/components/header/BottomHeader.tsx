import React from 'react'
import { LuMenu } from 'react-icons/lu'
import Link from 'next/link';

export default function BottomHeader() {
    return (
        <div className="flex justify-center items-center w-full h-10 bg-Azul text-sm text-white px-4">
            <a href="#cervejas" className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
              Cervejas
            </a>
            <a href="#whiskys" className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
              Whiskys
            </a>
            <a href="" className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
              Refrigerantes
            </a>
            <a href="" className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
              Energéticos
            </a>
            <a href="#vodkas" className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
              Vodkas
            </a>
        </div>
    )
}
