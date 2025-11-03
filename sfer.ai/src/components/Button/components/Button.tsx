import type {ReactElement} from "react";

type ButtonProps = {
    color: 'white' | 'blur' | 'blue',
    children: ReactElement | string,
    isInHeader?: boolean,
    width?: string,
    link?: string,
};

export const Button = ({
    color,
    children,
    isInHeader = false,
    width = 'auto',
    link,
}: ButtonProps) => {
    return (
        <button
            className={`cursor-pointer rounded-full ${color === 'white' ? 'bg-white text-black' : color === 'blue' ? 'bg-primary-200 text-white' : 'bg-[#FFFFFF33] backdrop-blur-3xl text-white'} ${isInHeader ? 'max-h-13 py-3 lg:py-3.5' : 'py-4.5 md:py-3 lg:py-3.5 xl:py-5.5 max-h-[70px]'} font-geist text-sm xs:text-base md:text-sm xl:text-base font-semibold px-5 lg:px-6 xl:px-10 uppercase`}
            style={{ width: width }}
            onClick={() => {
                const newWindow = window.open(link ?? 'https://kirillgurbanov.getcourse.ru/3day_workshop_ai', '_blank', 'noopener,noreferrer');
                if (newWindow) newWindow.opener = null;
            }}
        >
            {children}
        </button>
    );
};
