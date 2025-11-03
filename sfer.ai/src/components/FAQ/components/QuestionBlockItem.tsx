import { useState, useRef, useEffect } from "react";
import PlusIcon from '../../../assets/imgs/plus-circle.svg';
import MinusIcon from '../../../assets/imgs/minus-circle.svg';
import { motion, AnimatePresence } from "framer-motion";

type QuestionsBlockItemProps = {
    question: string;
    answer: string;
    isLast?: boolean;
};

export const QuestionsBlockItem = ({ question, answer, isLast = false }: QuestionsBlockItemProps) => {
    const [isQuestionOpened, setIsQuestionOpened] = useState<boolean>(false);
    const [contentHeight, setContentHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isQuestionOpened ? contentRef.current.scrollHeight : 0);
        }
    }, [isQuestionOpened]);

    return (
        <div
            className={`flex flex-col gap-2 w-full lg:w-192 py-6 cursor-pointer ${!isLast && 'border-b border-gray-200'}`}
            onClick={() => setIsQuestionOpened(!isQuestionOpened)}
            style={{ userSelect: 'none' }}
        >
            <div className="flex flex-row w-full justify-between items-start gap-2">
                <h4 className="text-base lg:text-lg font-medium text-black">{question}</h4>
                <motion.img
                    src={isQuestionOpened ? MinusIcon : PlusIcon}
                    alt="-"
                    animate={{rotate: isQuestionOpened ? 180 : 0}}
                    transition={{duration: 0.25}}
                    style={{ marginTop: 2 }}
                />
            </div>

            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{maxHeight: `${contentHeight}px`}}
            >
                <AnimatePresence mode="wait">
                    {isQuestionOpened && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-sm lg:text-base font-normal text-gray-600 block pt-2 whitespace-pre-line"
                        >
                            {answer}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};