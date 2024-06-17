import Cart from "@/components/carrinho/Cart";
import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function PaginaCart(){
    return(
        <main>
            <Header/>
            <div>
                <Cart />
            </div>
            <Footer></Footer> 
        </main>
    )
}