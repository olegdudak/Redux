import React from 'react';
import TestState from './allTodos/allToDo';
import Todos from './todos/todos';
import Header from './Header/header';
import {Routes, Route} from 'react-router-dom'

const Main = () => {
    return (
        <div className="main">
            <Header/>
                <div className='main_container max-w-7xl m-auto py-16'>
                    <Routes>
                        <Route path='/' element={<Todos/>}/>
                        <Route path='/allToDo' element={<TestState/>}/>
                    </Routes> 
                </div>
        </div>
    );
}

export default Main;
