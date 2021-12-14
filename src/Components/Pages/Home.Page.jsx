import React from "react";
import EntertainmentCardSlider from "../Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../HeroCarousel/HeroCarousel.component";
import PosterSlider from "../PosterSlider/PosterSlider.Component";

function HomePage() {
    const recommendedMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00307544-mubulqzfmf-portrait.jpg",
            title: "Assassins",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00307544-mubulqzfmf-portrait.jpg",
            title: "Nobody",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00307544-mubulqzfmf-portrait.jpg",
            title: "Justice Society: World War-II",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00307544-mubulqzfmf-portrait.jpg",
            title: "The Suicide Squad",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00307544-mubulqzfmf-portrait.jpg",
            title: "Malignant",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00307544-mubulqzfmf-portrait.jpg",
            title: "Dune",
            subtitle: "English",

        }
    ];

    const premiereMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00308210-sgmuwphcaq-portrait.jpg",
            title: "Assassins",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122451-ebbbdcqkdm-portrait.jpg",
            title: "Nobody",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310573-bnluwkhzsp-portrait.jpg",
            title: "Justice Society: World War-II",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-tcywztuxdf-portrait.jpg",
            title: "The Suicide Squad",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122449-xygxarrqwa-portrait.jpg",
            title: "Malignant",
            subtitle: "English",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
            title: "Dune",
            subtitle: "English",

        }
    ];

    const onlineStramEvents = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131211-gexprwvkcq-portrait.jpg",
            title: "Art and Craft Online Workshop",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310715-flnwqjffku-portrait.jpg",
            title: "Backpain Relief Program",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00308749-rnqyuhslld-portrait.jpg",
            title: "Improve Your Mental Health",
            subtitle: "Online Streaming",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319286-elgrehaqvc-portrait.jpg",
            title: "SoundX-Music",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319055-sxwqswnszj-portrait.jpg",
            title: "Phad Art Workshop",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307978-pjzvdghjqw-portrait.jpg",
            title: "Smartphone Photography",
            subtitle: "Watch on Zoom",

        }
    ];

    const laughterEvents = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319168-exfezhfcwu-portrait.jpg",
            title: "Excuse Me Brother by Aakash Gupta",
            subtitle: "The vibe: Varanasi",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA3IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00314859-ffswvjjtdl-portrait.jpg",
            title: "Chadar Trek With Deyor",
            subtitle: "Leh Ladakh",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131881-sjeyfxqtkt-portrait.jpg",
            title: "Vipul Goyal Live",
            subtitle: "Rule 34: Mumbai",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00316876-qeryqzjfpf-portrait.jpg",
            title: "Over The Top: AP Dhillon The Takeover Tour",
            subtitle: "Multiple Venues",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309001-qknyjgufka-portrait.jpg",
            title: "Medium Talk by Sriraam Pdmanabhan",
            subtitle: "Austin 4 CafeHouse: Pune ",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312600-ekqqaeqkhc-portrait.jpg",
            title: "Quarter Final 1 & 3, Marseille",
            subtitle: "Stade Vellodrome",

        }
    ];

    const outdoorEvents = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319168-exfezhfcwu-portrait.jpg",
            title: "Excuse Me Brother by Aakash Gupta",
            subtitle: "The vibe: Varanasi",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00130544-mhfkekgsdr-portrait.jpg",
            title: "Notes From The Bunker With Punit Punia",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00139024-gfnsghagbh-portrait.jpg",
            title: "In Conversation With Jeeya",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-wzhbnnlyvf-portrait.jpg",
            title: "FrontRow Open Mics",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317724-btvfctvjgv-portrait.jpg",
            title: "Khatta Meetha by Akansha Sharma",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319040-dmuawzssev-portrait.jpg",
            title: "Full Enjoy ft. Devesh Dixit",
            subtitle: "The Vibe: Varanasi",

        }
    ];


    const popularEvents = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309320-dqtxykhtnb-portrait.jpg",
            title: "Monali Thakur Teaches Singing",
            subtitle: "Online Streaming",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319397-djmkhdfpzv-portrait.jpg",
            title: "Christmas Special Slowglobe Painting",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313855-wnpnsfyrhg-portrait.jpg",
            title: "Potrait Sketching- Hobbystation",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319279-nyvxandwyk-portrait.jpg",
            title: "DiGi Open Mic- Poetry and Storytelling",
            subtitle: "Watch on Zoom",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00305867-xzxpbammgr-portrait.jpg",
            title: "Yoga Classes- Online- Attakkalari Connect",
            subtitle: "Online Streaming",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137234-xelwkngymr-portrait.jpg",
            title: "Android Developmen- Make Your Own App",
            subtitle: "Watch on Zoom",

        }
    ];

    const topEvents = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311494-xxvdhngckv-portrait.jpg",
            title: "Online Game- Lost Treasure Of Sundarbans",
            subtitle: "Online (Play from Homes)",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311497-gazcwanekg-portrait.jpg",
            title: "Online Game- Flight 9032 Murder Mystery",
            subtitle: "Online (Play from Homes)",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00122514-qhmwbyrvrz-portrait.jpg",
            title: "Call Of Duty Mobile Tournament",
            subtitle: "Online (Play from Homes)",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00134925-fefjnkxlec-portrait.jpg",
            title: "Free Fire Solo & Squad (Bermuda)",
            subtitle: "Online (Play from Homes)",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313270-ccxsdcvfwq-portrait.jpg",
            title: "BGMI Tournament- Everynight",
            subtitle: "Online (Play from Homes)",

        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310863-gvkvmezkjp-portrait.jpg",
            title: "Haunted House - Online Escape Room - Witty Escapes",
            subtitle: "Online (Play from Homes)",

        }
    ];


    return (
        <>
            <HeroCarousel />
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
                    The Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider title="Recommended Movies" subtitle="List of recommended movies"
                    posters={recommendedMovies}
                    isDark={false} />
            </div>

            <div className="bg-premiere-800 py-12">
                <div className="container mx-auto px-12 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full" />
                    </div>
                    <PosterSlider title="Premieres" subtitle="Brand new releases every Friday"
                        posters={premiereMovies}
                        isDark={true} />
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider title="Online Streaming Events" subtitle=""
                    posters={onlineStramEvents}
                    isDark={false} />
            </div>
            <div className="container mx-auto px-4 py-1 md:px-12 my-8">
                <PosterSlider title="Laughter Therapy" subtitle=""
                    posters={outdoorEvents}
                    isDark={false} />
            </div>
            <div className="container mx-auto px-4 py-1 md:px-12 my-8">
                <PosterSlider title="Outdoor Events" subtitle=""
                    posters={laughterEvents}
                    isDark={false} />
            </div>
            <div className="container mx-auto px-4 py-1 md:px-12 my-8">
                <PosterSlider title="Popular Events" subtitle=""
                    posters={popularEvents}
                    isDark={false} />
            </div>
            <div className="container mx-auto px-4 py-1 md:px-12 my-8">
                <PosterSlider title="Top Games & Sport Events" subtitle=""
                    posters={topEvents}
                    isDark={false} />
            </div>
            <div>footer</div>
        </>
    )
}
export default HomePage;