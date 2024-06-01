import Cart from "@/components/carrinho/Cart";
import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";

export default function PaginaCart(){
    return(
        <main>
            <Header/>
            <div>
                <Cart />
            </div>
        </main>
    )
}