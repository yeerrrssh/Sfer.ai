import LogoImg from '../../../assets/imgs/logo.svg';

export const Footer = () => {
    return (
        <div
            className="flex flex-row mt-20 md:mt-15 lg:mt-21 mx-4 sm:mx-12 lg:mx-16 xl:mx-[calc(calc(100vw-1248px)/2)] mb-8 lg:mb-11 border-t border-gray-200 justify-between items-start md:items-end pt-5 md:pt-0 md:h-10 lg:h-12 xl:h-14 gap-5">
            <img
                src={LogoImg}
                alt="Sfer.ai"
                className="filter brightness-80"
            />
            <span className="text-sm xl:text-base text-gray-500 text-end mt-1">2025 ИП Гурбанов Кирилл Игоревич, ОГРНИП 315774600229281. Все права защищены.</span>
        </div>
    );
};
