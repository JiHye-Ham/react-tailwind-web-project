
import type { Product } from "../types/Product";
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch } from '../app/store';
import type { Cart } from '../types/Cart';
import { RootState } from "../app/store";
import { add_item, update_quantity } from '../features/cart/cartSlice'
import { useNavigate } from "react-router-dom";


type ProductCardProps = {
  product: Product & Partial<Cart>;
  mode?:string;
}

export const ProductCard = ({product, mode="basic"}:ProductCardProps) => {
    const navigate = useNavigate();
    const auths = useSelector((state:RootState) => state.auth.auths);
    const activeAuth = auths.isLoggedIn;
    const dispatch = useDispatch<AppDispatch>();
    let uId:string = ""

    const carts = useSelector((state:RootState) => state.cart.carts);

    const handleCart = (value:number) => {
        if(activeAuth){
            uId = auths.userId;
        }
        const cartcheck = carts.some((cart)=>cart.userId===uId&&cart.productID===value);
        if(!cartcheck){
            const newItem:Cart= {
            userId:uId,
            productID:value,
            quantity:1
            }
            dispatch(add_item(newItem));
        }
        else {
            navigate("/myCart");
        }
    }

    const handleQuantity = (value:string) => {
        let uid = product.userId??""
        let quantity = product.quantity??0;
        if(value==="decrement"){
            if(quantity>0){
                quantity--;
            }else{
                return;
            }
        }else{
            quantity++;
        }
        const updateItem:Cart = {
            userId:uid,
            productID:product.id,
            quantity:quantity
        }
        dispatch(update_quantity(updateItem));
    }

    return(
        <div className="p-2 bg-white rounded hover:drop-shadow">
            <div className="m-auto w-[350px] h-[200px] md:w-[200px] h-[150px]">
                <img className="w-full h-full object-cover"
                src={product.image} alt="" />
            </div>
            {mode==="basic" &&
            <div className="p-2 flex flex-col items-center">
                <dl className="self-start">
                    <dt className="font-bold">{product.name}</dt>
                    <dd className="text-sm">{product.price.toLocaleString('ko-KR')}원</dd>
                </dl>
                { activeAuth
                    ?<button
                    className="mt-2 p-1 bg-black text-white text-sm hover:text-red-500"
                    onClick={()=>handleCart(product.id)}>
                        담기</button>
                    :<button 
                    className="mt-2 p-1 bg-black text-white text-sm hover:text-red-500"
                    onClick={()=>navigate("/login")} >
                        담기</button>}
            </div>
            }
            {mode==="cart"&&
            <div className="p-2 flex flex-col items-center border border-gray-250">
                <dl className="self-start">
                    <dt className="font-bold">{product.name}</dt>
                    <dd className="text-sm">{product.price.toLocaleString('ko-KR')}원</dd>
                </dl>
                <div className="flex items-center gap-3">
                    <button onClick={()=>handleQuantity("decrement")}
                    className="w-[30px] p-1 bg-black text-white hover:text-red-500"
                    >-</button>
                    <span>{product.quantity}</span>
                    <button onClick={()=>handleQuantity("increment")}
                    className="w-[30px] p-1 bg-black text-white hover:text-red-500"
                    >+</button>
                </div>
            </div>
            }
        </div>
    );
}