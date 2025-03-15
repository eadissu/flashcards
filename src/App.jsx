import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const QUESTIONS = [
  {"question": "What color is a polar bear’s skin?", "answer": "Black"}, 
  {"question": "Which animal has the strongest bite force?", "answer": "Saltwater crocodile"},
  {"question": "Which creature can regrow its brain?", "answer": "Sea squirt"},
  {"question": "What is the only bird that can fly backward?", "answer": "Hummingbird"},
  {"question": "Which bird is known for its incredible memory and can remember human faces?", "answer": "Crow"},
  {"question": "Which animal has fingerprints nearly identical to humans?", "answer": "Koala"},
  {"question": "What is the largest rodent in the world?", "answer": "Capybara"},
  {"question": "Which fish can change its gender multiple times in its life?", "answer": "Clownfish"},
  {"question": "Which bird lays the largest egg in the world?", "answer": "Ostrich"},
  {"question": "Which insect has the most painful sting in the world?", "answer": "Bullet Ant"}
];

function App() {
  const [count, setCount] = useState(0);
  const [side, flipSide] = useState(true); // true = question, false = answer
  const [answer, setAnswer] = useState("");
  const [answerStatus, setStatus] = useState("unanswered");


  function FlipCard() {
    flipSide(!side);
  }

  function IncrementCount() {
    setCount(count + 1);
    flipSide(true);
    setStatus("unanswered");
    setAnswer("");
  }

  function DecreaseCount() {
    setCount(count - 1);
    flipSide(true);
    setStatus("unanswered");
    setAnswer("");
  }

  // Check correctness
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answer);

    if (answer == QUESTIONS[count].answer) {
      setStatus("correct");
    } else {
      setStatus("incorrect");
    }
  }

  return (
    <>
    <div className="header">
      <h1>Animal Trivia</h1>
      <p>How many cool animal facts do you know?</p>
    </div>
    <div className="game">
      <p>Question {count + 1}/10</p>
      <div className="card" onClick={FlipCard}>
        <h3>
          {side ? QUESTIONS[count].question : QUESTIONS[count].answer}
        </h3>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input className={answerStatus} type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
          <input type='submit'/>
        </form>
      </div>

      <div className="arrows">
        <button onClick={DecreaseCount} disabled={count === 0}>Back</button>
        <button onClick={IncrementCount} disabled={count === QUESTIONS.length - 1} >Next</button>
      </div>

    </div>
    
      
    </>
  )
}

export default App
