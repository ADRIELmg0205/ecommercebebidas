import { Minus, Plus, X } from "lucide-react";

export default function TableCart() {
    return (
        <tr className="border-solid border-b-[3px] last:border-b-0">
            <td className="p-7">
                <div className="flex items-center ">
                    <img src="https://picsum.photos/100/120" className="rounded-md" />
                    <div className="ml-5">
                        <div className="text-xl mb-2">Produto</div>
                        <div className="text-gray-400">Descrição</div>
                    </div>
                </div>
            </td>
            <td>R$200</td>
            <td>
                <div className="bg-zinc-200 inline-flex justify-around items-center h-7 min-w-[60px] rounded-2xl overflow-hidden">
                    <button className="flex items-center px-2 text-lg h-full hover:bg-zinc-400">
                        <Minus className="w-3 h-3 " />
                    </button>
                    <span className="mx-2">2</span>
                    <button className="flex items-center px-2 text-lg h-full hover:bg-zinc-400 ">
                        <Plus className="w-3 h-3 " />
                    </button>
                </div>
            </td>
            <td>R$200</td>
            <td className="">
                <button className={`
            flex rounded-full border-0 w-7 h-7 items-center justify-center 
            text-xl bg-zinc-200  hover:bg-zinc-400`}>
                    <X className="w-4 h-4" />
                </button>
            </td>
        </tr>
    )
}