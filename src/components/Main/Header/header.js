import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header_container bg-red-500'>
            <div className='header p-5 flex justify-between'>
                <div className="name_logo_text text-7xl">TODO</div>
                <div className="butons flex items-center text-3xl">
                    <Link to="/" className="btn px-12">ToDo</Link>
                    <Link to="/allToDo" className="btn px-12">AllToDo</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
