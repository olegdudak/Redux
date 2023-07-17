import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../../../store/todo-actions'

function AllToDo() {

  const [inputValue, setInputValue] = useState('');

  const items = useSelector((state) => state.todos)
  const doneItems = items.filter((item) => item.done)
  const todoItems = items.filter((item) => !item.done)


  const dispatch = useDispatch()


  const handleAddFunction = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue)
  }

  
  const handleAdd = () => {
      dispatch({
        type: ADD_TODO,
        payload: {
          id: uuid(),
          text: inputValue,
          done: false,
        },
      })
  }

  const handleUPDATE = (item, done) => {
    dispatch({
      type: UPDATE_TODO,
      payload: {
        id: item.id,
        done,
      },
    })
}

  const handleDELETE = (item) => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id: item.id,
      },
    })
}
 
    

  return (
    <div className="App py-12 bg-red-500 rounded-3xl">
      <div className="App_container flex justify-around">


        <div className="doneItems_container border-2 border-red-100 rounded-2xl">
          <div className="name_text pt-5 text-3xl px-5">Виконані завдання</div>
          <div className="doneItems p-5">
              {doneItems.map((item) => (
            <div className='map_data py-5' key={item.id}>
              <div className="map_data_container border-2 border-red-100 rounded-2xl px-8 flex justify-between items-center">
                <div className="text_container px-5">
                  {item.text} 
                </div>
                <button className="delete p-4" onClick={() => handleDELETE(item)}>DELETE</button>
              </div>
            </div>
            ))}
          </div>
        </div>

        <div className="todoItems_container border-2 border-red-100 rounded-2xl">
          <div className="name_text pt-5 text-3xl px-5">Невиконані завдання</div>
          <div className="todoItems p-5">
              {todoItems.map((item) => (
            <div className='map_data py-5' key={item.id}>
              <div className="map_data_container border-2 border-red-100 rounded-2xl px-8 flex justify-between items-center">
              <input type='checkbox' checked={item.done} onChange={() => handleUPDATE(item, true)}/>
                <div className="text_container px-5">
                  {item.text} 
                </div>
                <button className="delete py-4" onClick={() => handleDELETE(item)}>DELETE</button>
              </div>
            </div>
            ))}
          </div>
        </div>
        

        <div className="inputToDo_container ">
          <div className="container border-2 border-red-100 rounded-2xl p-5">
            <div className="name_text pb-10 text-3xl px-5">Додати завдання</div>
            <div className='inputToDo border-2 border-red-100 rounded-2xl flex flex-col p-5'>
                  <input  
                          className='inputSettings'
                          type="text"
                          value={inputValue}
                          onChange={handleAddFunction}>
                  </input>
                  <button className="addButton pt-4" onClick={handleAdd}>ADD</button>
            </div>
          </div>
        </div>
        


      </div>
    </div>
  );
}

export default AllToDo;
