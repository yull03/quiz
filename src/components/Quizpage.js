import {useState} from "react";

const Quizpage = ({quiz,onFinished}) => {
    const [currentIdx,setCurrentIdx]=useState(0);
    const currentQuiz =quiz[currentIdx];
    const [score,setScore] = useState(0);
    const handleClick=(item)=>{
        //정답인지 아닌지 체크
        // if(item === currentQuiz.correct){
        //     setScore(score+10);
        // }
        const result=(item === currentQuiz.correct) ? score+20:score;

        if(currentIdx+1 < quiz.length){
            //계속 실행이 되어야 하고
            setCurrentIdx(currentIdx+1);
            setScore(result);
        }else{
            //문제 끝
            // console.log("문제내는거 끝");
            onFinished(result);
        }
    }
    return (
        <div className="quiz-page">
            <h2>퀴즈({currentIdx+1}/{quiz.length})</h2>
                <p style={{whiteSpace:"pre-line"}}>{currentQuiz.question}</p>
                <div className="choises">
                    {
                    currentQuiz.choices.map((item,idx)=>{
                        return <button key={idx} onClick={()=>{handleClick(item)}}>{item}</button>;
                    })
                    }
                </div>
                <p>점수 : {score}</p>
        </div>
    );
};

export default Quizpage;