import {Button} from "../../../components/Button";
import CheckMark from '../../../assets/imgs/checkmark.svg';

type CarouselPriceItemProps = {
    title: string;
    price: string;
    forMonth: string;
    list: string[];
    buttonText: string;
    link: string;
};

export const CarouselPriceItem = ({ title, price, forMonth, list, buttonText, link }: CarouselPriceItemProps) => {
    return (
        <div
            className="flex flex-col justify-between w-[calc(100vw-56px)] sm:w-[calc(calc(calc(100vw-96px)-16px)/2)] lg:w-[calc(calc(calc(100vw-128px)-16px)/2)] xl:w-153 min-h-80 xs:min-h-90 lg:min-h-148 bg-[#F7F7F5] p-8 flex-shrink-0 justify-between">
            <div className="flex flex-col pt-4 gap-3 lg:gap-5">
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-black">{title}</h4>
                    <span className="text-4xl lg:text-6xl font-semibold text-black">{price}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg xs:text-xl lg:text-2xl font-semibold text-black">{forMonth}</h4>
                    <span className="text-sm xs:text-base text-gray-600">в рассрочку на 3 месяца</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 text-gray-600 text-sm xs:text-base py-8">
                {list.map((listItem, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-2"
                        style={{lineHeight: '130%'}}
                    >
                        <img className="w-6 flex-shrink-0 mt-[-1px]" src={CheckMark} alt="-"/>
                        <span>{listItem}</span>
                    </li>
                ))}
            </div>
            <Button color="blue" link={link} width="fit-content">{buttonText}</Button>
        </div>
    );
};
