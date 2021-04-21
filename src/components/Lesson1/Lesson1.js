import React, { useState } from 'react';

const Lesson1 = () => {

  const [workers, setWorkers] = useState([
    {
      id: 1,
      firstName: 'Edyard',
      lastName: 'Barisov',
      workDays: 20,
      payOnDay: 10
    }, {
      id: 2,
      firstName: 'Barabar',
      lastName: 'Burov',
      workDays: 15,
      payOnDay: 15
    }, {
      id: 3,
      firstName: 'Zigmynd',
      lastName: 'Shrauc',
      workDays: 20,
      payOnDay: 10
    }, {
      id: 4,
      firstName: 'Kompr',
      lastName: 'Libmynd',
      workDays: 30,
      payOnDay: 5
    }, 
  ]);

  let allPayd= 0;

  workers.map(item => (
    allPayd += item.workDays * item.payOnDay
  ))

const updateWorkDays = index => e => {
    let newArr = [...workers]; 
    newArr[index].workDays = e.target.value; 
    setWorkers(newArr); 
}

const updatePayOnDay = index => e => {
  let newArr = [...workers]; 
  newArr[index].payOnDay = e.target.value; 
  setWorkers(newArr); 
}

  return (
    <div>
      <div className="tableName">
        Table
      </div>
      <div>
        <div className="column">
          <div>
            Names
          </div>
          {workers.map(item => (
            <div key={item.id} >
              {item.firstName} {item.lastName}
            </div>
          ))}
        </div>
        
        <div className="column">
          <div>
          workDays
          </div>
          {workers.map( (item, index) => (
            <div key={item.id}>
              <input type="number" value={item.workDays} onChange= {updateWorkDays(index)}/>
            </div>
          ))}
        </div>
                
        <div className="column">
          <div>
            payOnDay
          </div>
          {workers.map( (item, index) => (
            <div key={item.id} >
              <input type="number" value={item.payOnDay} onChange= {updatePayOnDay(index)}/>
            </div>
          ))}
        </div>

        <div className="column">
          <div>
            salary
          </div> 
          <div>
            {workers.map(item => (
              <div key={item.id} >
                {item.workDays * item.payOnDay}
              </div>
            ))}
          </div>   
        </div>
      </div>
      <div>
          globalPayd = {allPayd}
      </div>
    </div>
  );
}

export default Lesson1;
