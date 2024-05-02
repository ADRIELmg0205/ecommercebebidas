import React from 'react'
import { LuMenu } from 'react-icons/lu'

export default function BottomHeader() {
    return (
        <div className="flex justify-center items-center w-full h-10 bg-Azul text-sm text-white px-4">
            <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
                Cervejas
            </p>
            <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
                Destilados
            </p>
            <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
                Vinhos
            </p>
            <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
                Refrigerantes
            </p>
            <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white mx-4">
                Energéticos
            </p>
            <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300 text-white font-bold mx-4">
                Clube de Assinatura
            </p>
        </div>
    )
}
