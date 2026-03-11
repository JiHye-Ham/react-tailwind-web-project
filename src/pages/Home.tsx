
import { Hero } from "../components/Hero";
import { products as ProductData } from "../data/products"
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
    const products = [...ProductData];

    return(
        <div>
            <Hero />
            <div className="w-full pt-3 bg-gray-100">
                <div className="pb-3 text-center flex flex-col gap-2">
                    <h1 className="text-xl font-bold">전체 상품</h1>
                    <p className="text-sm">DAITSHOP의 상품을 만나보세요</p>
                </div>
                <div className="p-3 flex flex-col md:flex-wrap md:flex-row justify-center gap-5">
                    {products.map((product)=>{
                        return <ProductCard key={product.id} product={product}/>
                    })}
                </div>
            </div>
        </div>
    );
}
