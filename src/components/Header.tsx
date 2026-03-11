import { useState } from "react";
import { Modal } from "./Modal";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch } from '../app/store';
import { isLogout } from '../features/auth/authSlice'
import { RootState } from "../app/store";

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const auths = useSelector((state:RootState) => state.auth.auths);
    const activeAuth = auths.isLoggedIn;

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <div className="pt-[50px]">
            <div className= "w-full fixed top-0 flex p-2 justify-between item-center z-20 bg-white">
                <Link to="/"><h1 className="font-playpen">DAITSHOP</h1></Link>
                <nav className="hidden md:block">
                    <ul className="flex gap-2">
                        <Link to="/category/Elec"><li>전자제품</li></Link>
                        <Link to="/category/House"><li>생활용품</li></Link>
                        <Link to="/category/Cloth"><li>의류</li></Link>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex gap-2">
                        <li>{/* 로그인/로그아웃 버튼 */}
                            { activeAuth
                            ?<button onClick={()=>dispatch(isLogout())}>
                                로그아웃
                            </button>
                            :<button className='p-1 rounded bg-black text-white text-sm'
                            onClick={()=>navigate("/login")}>
                                <i className="fa-solid fa-user"></i>
                            </button>}
                        </li>
                        <li>{/* 장바구니 버튼 */}
                            { activeAuth
                            ?<button className='p-1 rounded bg-black text-white text-sm'
                            onClick={()=>navigate("/mycart")}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                            :<button className='p-1 rounded bg-black text-white text-sm'
                            onClick={()=>navigate("/login")}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>}
                        </li>
                        <li>{/* 모달 버튼 */}
                            <button className='p-1 rounded bg-black text-white text-sm md:hidden' onClick={openModal}>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
                <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
            </div>
        </div>
    );
}