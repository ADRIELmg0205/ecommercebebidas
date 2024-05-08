export default function Resumo() {
    return (
        <div>
            <div className="mb-4 border border-solid border-zinc-200 bg-zinc-300"> 
                <header className="p-3 text-lg border border-solid border-zinc-200">Resumo da Compra</header>
                <div className="p-5 mb-3"> 
                    <div className="flex justify-between">
                        <span>Sub-Total</span>
                        <span>R$ 299,90</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Frete</span>
                        <span>R$ 10,99</span>
                    </div>
                </div>
                <footer className=" flex justify-between p-3 text-base bg-zinc-400">
                    <span>Total</span>
                    <span>R$ 500</span>
                </footer>
            </div>
            <button className="bg-green-700 block w-full text-white p-4 uppercase tracking-[1px] ">Finalizar Compra</button>
        </div>
    )
}