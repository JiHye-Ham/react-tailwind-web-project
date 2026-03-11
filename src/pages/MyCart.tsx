
import { useSelector } from 'react-redux'
import type { Product } from '../types/Product';
import type { Cart } from '../types/Cart';
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { products as ProductData } from "../data/products"
import { ProductCard } from "../components/ProductCard";
import { useEffect } from 'react';

type CartItemDetail = Cart & Product;

export const MyCart = () => {
    const auths = useSelector((state:RootState) => state.auth.auths);
    const carts = useSelector((state:RootState) => state.cart.carts);
    const navigate = useNavigate();

    const activeUserId = auths.isLoggedIn ? auths.userId : " ";
    const filteredCarts = carts.filter((cart)=>cart.userId===activeUserId)
                                .map((cart)=>{
                                    const productInfo = ProductData.find((p) => p.id === cart.productID);
                                    return {
                                        ...cart,
                                        ...productInfo
                                    };
                                })
                                .filter((item): item is CartItemDetail => item !== null);;
    const total = filteredCarts.reduce((sum, item)=>sum+item.price*item.quantity,0).toLocaleString('ko-KR');

    useEffect(()=>{
        if(!auths.isLoggedIn){
           navigate("/");
        }
    },[auths.isLoggedIn, navigate]);
    return(
        <div className='min-h-[50vh] p-2 flex flex-col justify-center items-center gap-3 border border-gary-300 rounded'>
            <h1>장바구니 페이지</h1>
            <div className="p-3 flex flex-col md:flex-wrap md:flex-row justify-center gap-5">
                {filteredCarts.map((item)=>{
                    return <ProductCard key={item.productID} product={item} mode="cart" />
                })}
                {filteredCarts.length === 0 && <p>장바구니에 담겨있는 상품이 없습니다.</p>}
            </div>
            <p>총합 : {total}원</p>
        </div>
    );
}