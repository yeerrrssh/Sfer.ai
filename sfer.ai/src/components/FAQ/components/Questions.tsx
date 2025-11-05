import {QuestionsBlockItem} from "./QuestionBlockItem.tsx";

const questions = [
    {
        question: 'Мне подойдёт программа, если я совсем ничего не знаю про AI?',
        answer: 'Да! Программа отлично подходит для тех, кто никогда не работал с нейросетями.',
    },
    {
        question: 'Нужно ли покупать платные подписки (например, ChatGPT Plus)?',
        answer: 'Нет. Мы покажем, как работать на бесплатных версиях, и дадим сравнение платных инструментов, чтобы вы понимали, что реально стоит денег.',
    },
    {
        question: 'А если я не смогу присутствовать на эфирах?',
        answer: 'Все занятия записываются. Вы сможете пересмотреть их в любое время в течение 60 дней. Все конспекты и полезные материалы собираем в Notion.',
    },
    {
        question: 'Подойдёт ли программа, если я не из IT и не умею программировать?',
        answer: 'Конечно! Мы объясняем всё простым языком, без сложных терминов. Вы всегда можете задавать вопросы в чате, мы помогаем разобраться с вашим кейсом.',
    },
];

export const Questions = () => {
    return (
        <div className="flex flex-col w-full lg:w-192">
            {questions.map((question, index) => (
                <QuestionsBlockItem question={question.question} answer={question.answer}
                                    isLast={questions.length - 1 === index}/>
            ))}
        </div>
    );
};
