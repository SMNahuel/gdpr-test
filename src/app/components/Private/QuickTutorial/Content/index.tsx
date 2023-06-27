"use client";

import SliderHome from "@/app/components/PublicHome/swiper";

const Struct = ({ item }: any) => {
    return (
        <div className="flex flex-row-reverse">
            <div className="w-2/5">
                <h5 className='text-yellow font-bold'>What does that mean?</h5>
                <p>{item.claim}</p>
            </div>
            <div className="w-3/5 max-h-520px">
                `{" "}
                <img
                    src={item.img}
                    alt={item.claim}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
}


const Content = () => {

    const carouselItems = [
        {
            img: "/images/justice.svg",
            claim:
                "Ensure compliance, save time and effort, improve consistency and reduce risk",
        },
        {
            img: "/images/recommendationLetter.svg",
            claim: "Implement effective GDPR-compliance in less than 10 minutes",
        },
        {
            img: "/images/addToFooter.svg",
            claim: "Get all the documents you need and add them to your platforms",
        },
    ];

    return (
        <SliderHome items={carouselItems} Struct={Struct} />
    )
}

export default Content;