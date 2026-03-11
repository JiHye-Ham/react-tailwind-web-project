
export const Footer = () => {
    return(
        <div className="p-2 bg-black text-white">
            <div className="flex flex-col gap-2 md:flex-row justify-evenly">
                <section>
                    <p className="mb-2 font-bold">상품</p>
                    <ul className="text-sm">
                        <li><a href="">전자제품</a></li>
                        <li><a href="">생활용품</a></li>
                        <li><a href="">의류</a></li>
                    </ul>
                </section>
                <section>
                    <p className="mb-2 font-bold">고객서비스</p>
                    <ul className="text-sm">
                        <li><a href="">배송 정보</a></li>
                        <li><a href="">반품/교환</a></li>
                        <li><a href="">사이즈 가이드</a></li>
                        <li><a href="">고객 센터</a></li>
                    </ul>
                </section>
                <section>
                    <p className="mb-2 font-bold">회사정보</p>
                    <ul className="text-sm">
                        <li><a href="">회사소개</a></li>
                        <li><a href="">채용정보</a></li>
                        <li><a href="">이용약관</a></li>
                        <li><a href="">개인정보처리방침</a></li>
                        <li><a href="">매장찾기</a></li>
                    </ul>
                </section>    
            </div>
            <div className="mt-5 border-t border-gray-300">
                <p className="p-2 text-xs text-gray-500">© 2026 DAITSHOP. All rights reserved.</p>
            </div>
        </div>
    );
}
