import {Pages} from "./Pages.tsx";
import {Header} from "../../Header";
import {Footer} from "../../Footer";

export const Layout = () => {
    return (
        <div className="min-h-full flex relative">
            <div className="flex flex-col w-full h-full justify-center" style={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                // @ts-ignore
                '&::-webkit-scrollbar': {
                    height: '6px',
                },
            }}>
                <Header />
                <Pages />
                <Footer />
            </div>
        </div>
    );
};
