
import { useParams } from "react-router-dom";
import { products as ProductData } from "../data/products"
import { ProductCard } from "../components/ProductCard";

type ParamsType = {
    category : string
};

export const Category = () => {
    const { category } = useParams() as ParamsType;

    const filteredProducts = ProductData.filter((p)=>p.category===category);

    return(
        <div className="w-full pt-3 pb-3 bg-gray-100">
            <div className="p-3 flex flex-col md:flex-wrap md:flex-row justify-center gap-5">
                {filteredProducts.map((product)=>{
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div>
        </div>
    );
}