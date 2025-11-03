import StarsSvg from '../../../assets/imgs/stars.svg';

type CarouselReviewsItemProps = {
    title: string;
    text: string;
    author: string;
    role?: string;
};

export const CarouselReviewsItem = ({ title, text, author, role }: CarouselReviewsItemProps) => {
    return (
        <div
            className="flex flex-col justify-between max-w-[calc(100vw-56px)] sm:w-80 lg:w-[calc(calc(calc(100vw-128px)-32px)/3)] xl:w-90 min-h-80 xs:min-h-90 lg:min-h-125 bg-[#F7F7F5] p-8 flex-shrink-0 gap-8">
            <div className="flex flex-col gap-4">
                <img className="w-24" src={StarsSvg} alt="Звёзды" />
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-black">{title}</h4>
                    <span className="text-sm xs:text-base text-gray-500" style={{lineHeight: '130%'}}>{text}</span>
                </div>
            </div>
            <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-black">{author}</span>
                {!!role && (<span className="text-sm font-normal text-gray-500">{role}</span>)}
            </div>
        </div>
    );
};
