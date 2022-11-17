import { useEffect, useMemo, useState } from 'react';
import './App.css'
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {

  const [username, setUsername] = useState(null); 
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Entomology is the science that studies?",
      answers: [
        {
          text: "Behavior of human beings",
          correct: false,
        },
        {
          text: "Insects",
          correct: true,
        },
        {
          text: "The origin and history of technical and scientific terms",
          correct: false,
        },
        {
          text: "The formation of rocks",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Garampani sanctuary is located at?",
      answers: [
        {
          text: "Junagarh, Gujarat",
          correct: false,
        },
        {
          text: "Diphu, Assam",
          correct: true,
        },
        {
          text: "Kohima, Nagaland",
          correct: false,
        },
        {
          text: "Gangtok, Sikkim",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Hitler party which came into power in 1933 is known as?",
      answers: [
        {
          text: "Labour Party",
          correct: false,
        },
        {
          text: "Nazi Party",
          correct: true,
        },
        {
          text: "Ku-Klux-Klan",
          correct: false,
        },
        {
          text: "Democratic Party",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "FFC stands for?",
      answers: [
        {
          text: "Foreign Finance Corporation",
          correct: false,
        },
        {
          text: "Film Finance Corporation",
          correct: true,
        },
        {
          text: "Federation of Football Council",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Epsom (England) is the place associated with?",
      answers: [
        {
          text: "Horse racing",
          correct: true,
        },
        {
          text: "Polo",
          correct: false,
        },
        {
          text: "Shooting",
          correct: false,
        },
        {
          text: "Snooker",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in?",
      answers: [
        {
          text: "1967",
          correct: true,
        },
        {
          text: "1968",
          correct: false,
        },
        {
          text: "1958",
          correct: false,
        },
        {
          text: "1933",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Galileo was an Italian astronomer who?",
      answers: [
        {
          text: "developed the telescope",
          correct: false,
        },
        {
          text: "discovered four satellites of Jupiter",
          correct: false,
        },
        {
          text: "discovered that the movement of pendulum produces a regular time measurement",
          correct: false,
        },
        {
          text: "All of the above",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Golf player Vijay Singh belongs to which country??",
      answers: [
        {
          text: "Fiji",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "USA",
          correct: false,
        },
        {
          text: "UK",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "First Afghan War took place in?",
      answers: [
        {
          text: "1840",
          correct: false,
        },
        {
          text: "1858",
          correct: false,
        },
        {
          text: "1839",
          correct: true,
        },
        {
          text: "1848",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "First China War was fought between?",
      answers: [
        {
          text: "China and Britain",
          correct: true,
        },
        {
          text: "China and France",
          correct: false,
        },
        {
          text: "China and Egypt",
          correct: false,
        },
        {
          text: "China and Greek",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Famous sculptures depicting art of love built some time in 950 AD - 1050 AD are?",
      answers: [
        {
          text: "Jama Masjid",
          correct: false,
        },
        {
          text: "Sun temple",
          correct: false,
        },
        {
          text: "Mahabalipuram temples",
          correct: false,
        },
        {
          text: "Khajuraho temples",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Gravity setting chambers are used in industries to remove?",
      answers: [
        {
          text: "	SOx",
          correct: false,
        },
        {
          text: "	NOx",
          correct: false,
        },
        {
          text: "CO",
          correct: false,
        },
        {
          text: "suspended particulate matter",
          correct: true,
        },
      ],
    },
  ]

  const moneyPyramid = useMemo(() => 
        [ 
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1000" },
    { id: 6, amount: "$ 2000" },
    { id: 7, amount: "$ 4000" },
    { id: 8, amount: "$ 8000" },
    { id: 9, amount: "$ 16000" },
    { id: 10, amount: "$ 32000" },
    { id: 11, amount: "$ 64000" },
    { id: 12, amount: "$ 125000" },
    { id: 13, amount: "$ 250000" },
    { id: 14, amount: "$ 500000" },
    { id: 15, amount: "$ 1000000" },
  ].reverse(),
  []) 

    useEffect(() => {
        questionNumber>1 && setEarned(moneyPyramid.find((m) => m.id=== questionNumber-1).amount);

    },[questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop ?  (<h1 className='endText'>You earned: {earned}</h1>
        ) : (

        <>
        <div className="top">
          <div className="timer"><Timer setStop ={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom">
          <Trivia
            data={data}
            setStop={setStop}
            questionNumber= {questionNumber}
            setQuestionNumber={setQuestionNumber} />
        </div>
        </>
          )}
      </div>
      <div className="pyramid">
        <ul className='moneyList' >
          {moneyPyramid.map((m) => (<li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} >
            <span className='moneyListItemNumber' >{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
          ))}



        </ul>
      
    
      </div>
        </>
      ) : <Start setUsername={setUsername} /> }
      
    </div>
  );
}

export default App;
