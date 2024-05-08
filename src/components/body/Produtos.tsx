import Image from "next/image"
import veibarrero from "../../images/veibarrero.png"

export default function Produtos() {
    return (
        <div className="flex flex-col items-center rounded-md border border-zinc-500 h-80 w-56 ">

            <h2 className="text-lg text-center font-semibold p-4">Veio Barreiro</h2>

            <Image
                src={veibarrero}
                height={50} width={50}
                alt={"veibarrero.png"}
                className="" />
            <span className="flex justify-between text-center p-4">R$19,99 </span>
            <span className="text-xs">Aguardente Velho Barreiro 980ml</span>
            <button className={`
                 bg-blue-500 h-7 w-3/4 border-none text-white 
                text-base font-bold roudend-md mt-2
            `}>Comprar </button>

        </div>
    )
}


