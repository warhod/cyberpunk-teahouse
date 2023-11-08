import { useState } from 'react'
import humantest from './humantest.json'
import './HumanTest.css'

type Test = {
  id?: number;
  question?: string;
  images: string[];
  correctAnswer?: number;
}

const HumanTest: React.FC = () => {
  
  const [currentHumanTest, setCurrentHumanTest] = useState<Test>({id: 0, question: "", images: [], correctAnswer: 0});
  const getRandomHumanTest = () => {
    
    const randomIndex = Math.floor(Math.random() * humantest.length);
    console.log("randomIndex:" + randomIndex);
    console.log("Fetched test:" + humantest[randomIndex]);
    setCurrentHumanTest(humantest[randomIndex]);
  };

  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  
  const getNextQuestion = () => {
    setIsCorrectAnswer(false);
    getRandomHumanTest();
  };

  return (
    <div>
      <h1>CAPTCHAI TEST</h1>
      <div>
        <h1>{currentHumanTest.question}</h1>
        <div className="image-container">
          {currentHumanTest.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => setSelectedAnswer(index)}
            />
          ))}
        </div>
        <button onClick={getNextQuestion}>Verify I'm Human</button>
        <div>
          {isCorrectAnswer === null ? null : (
            <div>
              {selectedAnswer === currentHumanTest.correctAnswer ? (
                <p>Correct! Welcome human!</p>
              ) : (
                <div>
                  <p>Wrong! Try Again.</p>
                  <button onClick={getNextQuestion}>Try Again</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HumanTest;
