import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.component";




const HeroCarousel = () => {
    const [images, setImages] = useState([
        "https://in.bmscdn.com/promotions/cms/creatives/1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1637323134871_divinepunyapaaptour_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1638255430736_ultimatekarateleagueseason2lucknowwebshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1635748808813_dhillondesktopnov.jpg"
    ]);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className="w-full h-56 md:h-80 py-3">
                        <img src={image} alt="Hero Banner" className="w-full h-full object-center" />
                    </div>
                ))}
            </HeroSlider>
        </div>
        <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                {images.map((image) => (
                    <div className="w-full h-96 px-2 py-3">
                        <img src={image} alt="Hero Banner" className="w-full h-full rounded-md object-center" />

                    </div>
                ))}
            </HeroSlider>
        </div>
    </>;
}
export default HeroCarousel;