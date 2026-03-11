import { Link } from "react-router-dom";

interface ModalProps {
    isModalOpen:boolean;
    closeModal:()=>void;
}

export const Modal: React.FC<ModalProps> = ({isModalOpen, closeModal}) => {
    return(
        <div style={{display : isModalOpen ?"block":"none"}}>
            <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.35)] z-40">
            </div>
            <div className="fixed p-2 w-1/2 min-h-lvh top-0 left-1/2 bg-white z-50">
                <nav>
                    <ul className="flex flex-col gap-2">
                        <Link to="/category/Elec"><li>전자제품</li></Link>
                        <Link to="/category/House"><li>생활용품</li></Link>
                        <Link to="/category/Cloth"><li>의류</li></Link>
                    </ul>
                </nav>
                <button className="absolute top-1 right-1"
                onClick={closeModal}>
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    );
}
