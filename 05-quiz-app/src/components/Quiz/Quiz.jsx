import React, { useRef, useState } from 'react'

const Quiz = () => {

    const data = [
        {
            question: "Which company developed JavaScript?",
            option1: "Microsoft",
            option2: "Netscape",
            option3: "Google",
            option4: "Oracle",
            ans: 2
        },
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            option1: "let",
            option2: "int",
            option3: "string",
            option4: "float",
            ans: 1
        },
        {
            question: "Which method converts JSON data into a JavaScript object?",
            option1: "JSON.stringify()",
            option2: "JSON.parse()",
            option3: "JSON.convert()",
            option4: "JSON.object()",
            ans: 2
        },
        {
            question: "Which symbol is used for single-line comments in JavaScript?",
            option1: "//",
            option2: "/* */",
            option3: "#",
            option4: "<!-- -->",
            ans: 1
        },
        {
            question: "Which method is used to select an element by ID in JavaScript?",
            option1: "getElementByClass()",
            option2: "querySelectorAll()",
            option3: "getElementById()",
            option4: "getElementsByTag()",
            ans: 3
        }
    ];

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("bg-green-100", "border-green-400");
                setLock(true);
                setScore(prev => prev + 1);
            }
            else {
                e.target.classList.add("bg-red-100", "border-red-500");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("bg-green-100", "border-green-400");
            }
        }

    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("bg-red-100", "border-red-500");
                option.current.classList.remove("bg-green-100", "border-green-400");
                return null;
            });
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div className='min-w-2/5 bg-white text-black flex flex-col rounded-xl px-12 py-5'>

            <h1 className='text-4xl'>Quiz App</h1>
            <hr className='h-[2px] my-3 border-none bg-gray-600' />

            {result ? <></> : <>

                <h2 className='text-2xl mb-5'>
                    {index + 1}. {question.question}
                </h2>

                <ul>
                    <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}
                        className='flex items-center text-xl h-16 pl-3.5 border border-gray-700 mb-5 cursor-pointer rounded-md'>
                        {question.option1}</li>

                    <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}
                        className='flex items-center text-xl h-16 pl-3.5 border border-gray-700 mb-5 cursor-pointer rounded-md'>
                        {question.option2}</li>

                    <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}
                        className='flex items-center text-xl h-16 pl-3.5 border border-gray-700 mb-5 cursor-pointer rounded-md'>
                        {question.option3}</li>

                    <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}
                        className='flex items-center text-xl h-16 pl-3.5 border border-gray-700 mb-5 cursor-pointer rounded-md'>
                        {question.option4}</li>
                </ul>

                <button onClick={next} className='px-12 py-3 bg-blue-500 text-2xl text-white rounded-md cursor-pointer m-auto text-center'>Next</button>

                <div className="m-auto text-lg py-2">{index + 1} of {data.length} questions</div>
            </>}

            {result ? <>

                <h2 className='text-xl pb-3'>You Scored {score} out of {data.length} </h2>

                <button onClick={reset} className='px-12 py-2 bg-blue-500 text-2xl text-white rounded-md cursor-pointer m-auto text-center'>Reset</button></> :

                <></>}



        </div>
    )
}

export default Quiz