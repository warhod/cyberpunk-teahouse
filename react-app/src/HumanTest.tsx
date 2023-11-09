import { useState, useEffect } from 'react'
import humantest from './humantest.json'
import './HumanTest.css'

type Test = {
  id?: number;
  question?: string;
  images: string[];
  correctAnswer?: number;
}

const HumanTest: React.FC = () => {
  
  const [currentHumanTest, setCurrentHumanTest] = useState<Test>({
    id: -1, 
    question: "", 
    images: [], 
    correctAnswer: -1
  });
  const [glowingImage, setGlowingImage] = useState<number>(-1); // -1 means no answer is selected
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1); 
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [isDisplayTest, setIsDisplayTest] = useState<boolean>(true);
  
  useEffect(() => {
    // Load the initial question and images when the component mounts
    getRandomHumanTest();
  }, []); // Empty dependency array means this effect runs once on component mount

  const getRandomHumanTest = () => {
    const randomIndex = Math.floor(Math.random() * humantest.length);
    setCurrentHumanTest(humantest[randomIndex]);
    setGlowingImage(-1); // Clear the glowing effect on new question
    setSelectedAnswer(-1); // Clear the selected answer
    setIsCorrectAnswer(false); // Clear the correctness status
    setIsDisplayTest(true); // display another test
  };

  const checkIsCorrectAnswer = () => {
    setIsCorrectAnswer(selectedAnswer === currentHumanTest.correctAnswer);
  }

  return (
    <div>
      <h1 className='glow glitch layers'>CAPTCHAI TEST</h1>
      <div>
        {isDisplayTest ? (
          <div>
            <div>{currentHumanTest.question}</div>
            <div className="image-container">
              {currentHumanTest.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => {
                    setSelectedAnswer(index);
                    setGlowingImage(index);     // Glows image to indicate selection
                  }}
                  className={`glow-image ${glowingImage === index ? 'glowing' : ''}`}
                />
              ))}
            </div>
            <button onClick={() => {
                checkIsCorrectAnswer();
                setIsDisplayTest(false)
              }}>Verify I'm Human</button>
          </div>
        ) : (  
          <div>
            {isCorrectAnswer === null ? null : (
              <div>
                {isCorrectAnswer ? (
                  <p>Correct! Welcome human!</p>
                ) : (
                  <div>
                    <p>Wrong! Try Again.</p>
                    <button onClick={getRandomHumanTest}>Try Again</button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HumanTest;
