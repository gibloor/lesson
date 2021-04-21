import React, { useState } from 'react';
import './Lesson2.css';

const Lesson2 = () => {

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

  const changeAnswer = index => e => {
    let newArr = [...questions];
    newArr[index].answerUser = e.target.value;
    setQuestions(newArr);
  }

  const checkAnswer = index => e => {
    e.preventDefault();
    let newArr = [...questions];
    newArr[index].answerTake = true;
    setQuestions(newArr);
  }

  return (
    <div>
      {
        questions.map( (item, index) => (
          <form key={index} onSubmit={checkAnswer(index)}>
            <div>
              {item.question}
            </div>
            {item.answerTake ? 
              (item.answerUser == item.goodAnswer ?
              <div className="goodAnswer"> Ваш ответ: {item.answerUser} </div> : 
              <div className="badAnswer"> Ваш ответ: {item.answerUser}, правильно: {item.goodAnswer} </div>) :
              <input type="text" value={item.answerUser} onChange={changeAnswer(index)}/>
            }
            <input text="submit" type="submit"/>
          </form>
        ))
      }
    </div>
  );
}

export default Lesson2;
