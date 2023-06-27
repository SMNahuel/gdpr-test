const HomeStruc = ({item} : any) => {
    return (
        <div>
            <h2 className="text-white text-center text-[4rem] leading-[3.9rem] font-bold">
                {item.claim}
            </h2>
            <div className="w-full h-[30rem] max-h-520px">
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

export default HomeStruc;