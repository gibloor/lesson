import React, { useState, Fragment } from 'react';
import './Lesson8.css';

const Lesson8 = () => {

  const [masXO, setMasXO] = useState(
    [
      '', '', '',
      '', '', '',
      '', '', ''
    ]
  );

  const winnerTable =       
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

  const [whoPlay, setWhoPlay] = useState('X');
  
  const [winner, setWinner] = useState(false);

  const moveXO = (index) => () => {
    let newArr = [...masXO];
    newArr.splice(index, 1, whoPlay);
    setMasXO(newArr);  
    checkWinner(newArr);      
  }

  const checkWinner = (newArr) => {
    winnerTable.map(item => (
      newArr[item[0]] && newArr[item[0]] === newArr[item[1]] && newArr[item[0]] === newArr[item[2]] ?
        setWinner(whoPlay) :
        whoPlay=='X' ? setWhoPlay('O') : setWhoPlay('X')
    ))
  }

  return (
    <div>
      <div className='allCell'>
        {winner ?
          <div>
            Winner={winner}
          </div>
          :
          masXO.map((item, index) => (
            item == '' ?
              <div key={index} onClick={moveXO(index)} className='cell' value={item}>{item}</div> :
              <div key={index} className='cell' value={item}>{item}</div>
          ))
        }
      </div>
      
    </div>
  );
}

export default Lesson8;