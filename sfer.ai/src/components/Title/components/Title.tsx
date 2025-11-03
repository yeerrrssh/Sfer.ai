export const Title = ({ title, subTitle }: { title: string; subTitle?: string }) => {
    return (
        <div className="flex flex-col gap-4 lg:gap-5 lg:items-center lg:text-center max-w-192">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-semibold text-black leading-[120%]">{title}</h2>
            {!!subTitle && (
                <span className="text-base lg:text-lg xl:text-xl font-normal text-gray-500">{subTitle}</span>
            )}
        </div>
    );
};
