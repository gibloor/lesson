import React, { useState } from 'react';
import './Lesson6.css';

const Lesson6 = () => {

  const [todoList, setTodoList] = useState([

    {
      task:'Задача1',
      taskComplition: '☐',
      taskEdit: true
    },
    {
      task:'Задача2',
      taskComplition: '☐',
      taskEdit: true
    }
  ])

  const changeAnswer = index => e => {
    let newArr = [...todoList];
    newArr[index].task = e.target.value;
    setTodoList(newArr);
  }

  const acceptTodo = index => () => {
    let newArr = [...todoList];
    newArr[index].taskComplition == '☑' ?
      (newArr[index].taskComplition = '☐')&&(newArr[index].taskEdit = true) : 
      (newArr[index].taskComplition = '☑')&&(newArr[index].taskEdit = false);
    // newArr[index].taskComplition = (newArr[index].taskComplition == '☑' ? '☐' : '☑');
    setTodoList(newArr);
  }

  const deleteTodo = index => () => {
    let newArr = [...todoList];
    newArr.splice(index, 1);
    setTodoList(newArr);
  }

  const addTodo = () => {
    let newArr = [...todoList];
    newArr.splice(newArr.length, 0, {
      task:'Задача',
      taskComplition: '☐',
      taskEdit: true
    });
    setTodoList(newArr);
  }

  return (
    <div>
      {todoList.map((item, index) => (
        <div key={index} className='task'>
          <div className='comleteTodo' onClick={acceptTodo(index)} value={item.taskComplition}>
            {item.taskComplition}
          </div>
          {item.taskEdit ?
            <div>
              <input className='textTodo' type="text" value={item.task} onChange={changeAnswer(index)} />
              <button onClick={deleteTodo(index)}>
                X
              </button>
            </div> :
            <div className='completeTodo'>
              <strike  type="text">
                {item.task}
              </strike>
            </div>
          }
        </div>
      ))}
      <button onClick={() => addTodo()}>+</button>
    </div>
  );
}

export default Lesson6;