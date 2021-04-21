import React, { useState } from 'react';
import './Lesson3.css';

const Lesson3 = () => {

  const [questions, setQuestions] = useState([
    {
      answerUser: 0,
      goodAnswer: 2,
      question: '1+1?',
      answerTake: false
    }, {
      answerUser: 0,
      goodAnswer: 6,
      question: '2+2*2?',
      answerTake: false
    }, {
      answerUser: 0,
      goodAnswer: 3,
      question: '3/3*3?',
      answerTake: false
    }, {
      answerUser: 0,
      goodAnswer: 10,
      question: '5+5?',
      answerTake: false
    }
  ]);

  const changeAnswer = active => e => {
    let newArr = [...questions];
    newArr[active].answerUser = e.target.value;
    setQuestions(newArr);
  }

  const checkAnswer = active => e => {
    e.preventDefault();
    let newArr = [...questions];
    newArr[active].answerTake = true;
    setQuestions(newArr);
    allAnswerGet();
  }

  const [active, setActive] = useState(0);

  const activeUp = () => {
    active == questions.length-1 ? setActive(0) : setActive(active+1)
  }

  const activeDown = () => {
    active == 0 ? setActive(questions.length-1) : setActive(active-1)
  }

  const [allGet, setAllGet] = useState(false);

  const allAnswerGet = () => {
    questions.map(item => (
      item.answerTake === false ? setAllGet(false) : setAllGet(true)
    ))
  }

  const [seeAnswer, setSeeAnswer] = useState(false)
;
  return (
    <div>
      {seeAnswer == false ? (
        <div>
          <form onSubmit={checkAnswer(active)}>
            <div>
              {questions[active].question}
            </div>
              <input type="text" value={questions[active].answerUser} onChange={changeAnswer(active)}/>
            <input onSubmit={checkAnswer(active)} text="submit" type="submit"/>
          </form>
          {allGet && <button onClick={() => setSeeAnswer(true)}>Проверить ответы</button>}
          <button onClick={activeDown}>-</button>
          <button onClick={activeUp}>+</button>
        </div>
        ) : (
          questions.map( (item, index) => (
            <form key={index} onSubmit={checkAnswer(index)}>
              <div>
                {item.question}
              </div>
              {
                item.answerUser == item.goodAnswer ?
                  <div className="goodAnswer"> Ваш ответ: {item.answerUser} </div> : 
                  <div className="badAnswer"> Ваш ответ: {item.answerUser}, правильно: {item.goodAnswer} </div>
              }
            </form>
          )))}
    </div>
  );
}

export default Lesson3;