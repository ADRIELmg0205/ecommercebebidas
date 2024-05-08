import { X, Plus, Minus } from "lucide-react"
import TableCart from "./TableCart"
import Resumo from "./Resumo"
export default function Cart() {
    return (
        <main className="p-8">
            <div className="text-4xl p-12 text-center">Meu Carrinho</div>
            <div className="flex ">
                <section className="flex-1 ">
                    <table className="w-full border-collapse">
                        <thead className="border-b-2">
                            <tr className="text-left uppercase text-zinc-400">
                                <th className="pb-[10px] ">Produto</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                                <th>~</th>
                            </tr>
                        </thead>
                        <tbody>
                           <TableCart/>
                           <TableCart/>
                           <TableCart/>
                           <TableCart/>
                           <TableCart/>
                        </tbody>
                    </table>
                </section>
                <aside className="ml-7"> 
                  <Resumo/>
                </aside>
            </div>
        </main>

    )
}

//https://youtu.be/8VjsyeMo9-A?t=3216