type CarouselContentItemProps = {
    iconUrl: string;
    title: string;
    text: string;
    list: string[];
};

export const CarouselContentItem = ({iconUrl, title, text, list}: CarouselContentItemProps) => {
    return (
        <div
            className="flex flex-col justify-between max-w-[calc(100vw-56px)] sm:w-80 lg:w-[calc(calc(calc(100vw-128px)-32px)/3)] xl:w-100 min-h-80 xs:min-h-90 lg:min-h-130 bg-[#F7F7F5] p-8 flex-shrink-0 gap-8">
            <div className="flex flex-col gap-4 lg:gap-6">
                <img className="w-8 lg:w-10 h-8 lg:h-10" src={iconUrl} alt={title}/>
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-black">{title}</h4>
                    <span className="text-sm xs:text-base text-black" style={{lineHeight: '130%'}}>{text}</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-gray-500 ml-5 text-sm xs:text-base">
                {list.map((listItem) => (
                    <li style={{lineHeight: '130%'}}>{listItem}</li>
                ))}
            </div>
        </div>
    );
};
