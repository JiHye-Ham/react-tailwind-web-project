import { useState } from "react"


export const Hero = () => {
    let number = 0;
    const imgList = ['/img/hero/hero_img1.jpg', '/img/hero/hero_img2.jpg', '/img/hero/hero_img3.jpg'];

    const [currentImgIndex, setCurrentImgIndex ] = useState<number>(0);

    const [style, setStyle] = useState({
        transform: `translateX(-${currentImgIndex}00%)`,
        transition : `all 0.4s ease-in-out`,
    })

    const nextSlide = () => {
        number = (currentImgIndex + 1) % imgList.length;
        moveSlide();
    };
    const prevSlide = () => {
        if(currentImgIndex > 0 ){
            number = currentImgIndex - 1;
        }
        else{
            number = imgList.length-1;
        }
        moveSlide();
    };

    const moveSlide = () => {
        setCurrentImgIndex(number);
        setStyle({
            transform: `translateX(-${number}00%)`,
            transition : `all 0.4s ease-in-out`, 
        });
    }

    return(
        <div className="relative">
            <div className="overflow-hidden w-full">
                <div style={style} className="flex h-full">
                    {imgList.map((iL, i)=>{
                        return(
                            <img 
                            key={i}
                            src={iL}
                            className="h-full w-full object-contain" 
                            alt="" />
                        )
                    })}
                </div>
            </div>
            {/* 버튼 위치 조정 안쪽으로 패딩 혹은 마진 필요 또한 버튼 css 추가 */}
            <div className="absolute w-full px-3 flex justify-between top-[50%]">
                <button className="p-2 bg-white rounded-full hover:bg-gray-400" onClick={prevSlide}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-gray-400" onClick={nextSlide}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}
