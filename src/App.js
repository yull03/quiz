import "./App.scss";
import quizData from "./quizData/quizData";
import Categoris from "./components/Categoris";
import Quizpage from "./components/Quizpage";
import Results from "./components/Results";
import {useState} from "react";

const App = () => {
  const [category,setCategory]=useState("");
  const [filterQuiz,setFilterQuiz]=useState([]);
  const [score,setScore] = useState(0);
  const [finished,setFinished] = useState(false);;
  const onSelectCategory=(select)=>{
    setCategory(select);
    
    const quizArr=quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
    setFilterQuiz(quizArr);
  }
  const handleFinish=(score)=>{
    setFinished(true);
    setScore(score);
  }
  const handleRestart =()=>{
    setCategory(' ');
    setFinished(false);
    setScore(score);
  }
  return (
    <div className="app">
      { !category && !finished &&
        <Categoris categoris={quizData.categories} 
                onSelect={onSelectCategory}/>
      }
      {
        category && !finished &&(<Quizpage quiz={filterQuiz} onFinished={handleFinish}/>)
        }
        {
          finished && (<Results onRestart={handleRestart} appScore={score}/>) 
        }
    </div>
  );
};

export default App;
