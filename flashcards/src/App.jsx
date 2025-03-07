import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const QUESTIONS = [
  {"question": "What color is a polar bear’s skin?", "answer": "Black! Their fur is actually transparent, not white"}, 
  {"question": "Which animal has the strongest bite force?", "answer": "The saltwater crocodile, with a bite force of over 3,700 PSI!"},
  {"question": "Which creature can regrow its brain?", "answer": "The sea squirt! It eats its own brain and regenerates a new one!"},
  {"question": "What is the only bird that can fly backward?", "answer": "The hummingbird"},
  {"question": "Which bird is known for its incredible memory and can remember human faces?", "answer": "The crow"},
  {"question": "Which animal has fingerprints nearly identical to humans?", "answer": "The koala"},
  {"question": "What is the largest rodent in the world?", "answer": "The Capybara"},
  {"question": "Which fish can change its gender multiple times in its life?", "answer": "The clownfish "},
  {"question": "Which bird lays the largest egg in the world?", "answer": "The Ostrich "},
  {"question": "Which insect has the most painful sting in the world?", "answer": "The bullet ant (it feels like being shot!)"}
];

function App() {
  const [count, setCount] = useState(0);
  const [side, flipSide] = useState(true); // true = question, false = answer


  function FlipCard() {
    flipSide(!side);
  }

  function IncrementCount() {
    setCount(count + 1);
    flipSide(true);
  }

  function DecreaseCount() {
    setCount(count - 1);
    flipSide(true);
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

      <div className="arrows">
        <button onClick={DecreaseCount} disabled={count === 0}>Back</button>
        <button onClick={IncrementCount} disabled={count === QUESTIONS.length - 1} >Next</button>
      </div>

    </div>
    
      
    </>
  )
}

export default App
